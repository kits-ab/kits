const crypto = require("crypto")
const fetch = require("node-fetch")

const fallbackJobs = require("./data/fallback_jobs")

exports.sourceNodes = async ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions

  const processJob = (job) => {
    const nodeId = createNodeId(`teamtailor-job-${job.id}`)
    const nodeContent = JSON.stringify(job)
    const nodeContentDigest = crypto.createHash("md5").update(nodeContent).digest("hex")

    const nodeData = Object.assign({}, job, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `TeamtailorJob`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    })

    return nodeData
  }

  if (configOptions.apiEndpoint && configOptions.apiKey) {
    const headers = {
      Authorization: `Token token=${configOptions.apiKey}`,
      "X-Api-Version": "20161108"
    }

    try {
      const jobsResponse = await fetch(`${configOptions.apiEndpoint}/v1/jobs`, { headers })
      const jobs = await jobsResponse.json()
      if (jobs && jobs.data) {
        jobs.data.forEach(async (job) => {
          createNode(processJob(job))
        })
        console.log(": created job nodes from teamtailor")
      }
    } catch (error) {
      console.log("Unable to get jobs from Teamtailor", error)
      throw error
    }
  } else {
    fallbackJobs.data.forEach((job) => {
      createNode(processJob(job))
    })
    console.log(": created job nodes from fallback data")
  }
}
