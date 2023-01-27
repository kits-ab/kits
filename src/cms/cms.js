import CMS from "netlify-cms-app"

CMS.registerEditorComponent({
  id: "collage",
  label: "Collage",
  hint: "Visar bilder i ett slags collage som tar upp hela sidans bredd. Ser bäst ut med bilder i landskapsformat, och bör vara 2-3 bilder.",
  fields: [
    {
      label: "Images",
      name: "imageList",
      widget: "list",
      min: 2,
      max: 3,
      field: { label: "Image", name: "image", widget: "image" }
    }
  ],
  pattern: /^<div class="image-grid">(.*)<\/div>/ms,
  fromBlock: function (match) {
    const matchedString = match[0]
    const regexp = /src="(\S*)"/g
    const imageMatches = [...matchedString.matchAll(regexp)]
    const imagePaths = imageMatches.map(imageMatchArray => imageMatchArray[1])

    return { imageList: imagePaths }
  },
  toBlock: function (data) {
    if (!data.imageList) {
      return
    }
    let returnString = `<div class="image-grid">`
    data.imageList.forEach(image => returnString = returnString.concat(`<img src="${image}" alt="">`))
    returnString = returnString.concat("</div>")
    return returnString
  },
  toPreview: function (data) {
    if(!data.imageList) {
      return
    }
    let returnString = "<div>"
    data.imageList.forEach(image => returnString = returnString.concat(`<img src="${image}" style="max-width:500px">`))
    returnString = returnString.concat("</div>")

    return returnString
  }
})
