const crypto = require("crypto")
const fetch = require("node-fetch")
const FormData = require("form-data")

const fallbackUsers = require("./data/fallback_users")

const form = new FormData()
const auth = {}

auth.getAccessToken = async config => {
  const requestParams = {
    grant_type: "client_credentials",
    client_id: config.clientId,
    client_secret: config.clientSecret,
    resource: "https://graph.microsoft.com"
  }

  Object.keys(requestParams).forEach(key => {
    form.append(key, requestParams[key])
  })

  const options = {
    method: "POST",
    body: form
  }

  return fetch(config.tokenEndpoint, options)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        throw json
      } else return json.access_token
    })
    .catch(error => {
      console.log("Auth", error)
      throw error
    })
}

const graph = {}
graph.getUsers = async token => {
  const options = {
    method: "GET",
    headers: { Authorization: "Bearer " + token }
  }

  return fetch("https://graph.microsoft.com/v1.0/users", options)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        console.log("Graph", json)
        throw json
      } else {
        return json
      }
    })
}

exports.sourceNodes = async ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions

  const processUserInfo = uinfo => {
    const nodeId = createNodeId(`o365-userinfo-${uinfo.id}`)
    const nodeContent = JSON.stringify(uinfo)
    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex")

    const nodeData = Object.assign({}, uinfo, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `O365User`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    })

    return nodeData
  }

  if (configOptions.clientId && configOptions.clientSecret && configOptions.tokenEndpoint) {
    try {
      const token = await auth.getAccessToken(configOptions)
      const users = await graph.getUsers(token)
      console.log(JSON.stringify(users, null, 2))
      if (users && users.value) {
        users.value.forEach(uinfo => {
          createNode(processUserInfo(uinfo))
        })
      }
      console.log(": created user nodes from o365")
    } catch (error) {
      console.log(": unable to get users from o365", error)
      throw error
    }
  } else {
    fallbackUsers.forEach(uinfo => {
      createNode(processUserInfo(uinfo))
    })
    console.log(": created user nodes from fallback data")
  }
}
