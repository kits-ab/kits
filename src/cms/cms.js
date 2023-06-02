import CMS from "netlify-cms-app"
import { useEffect, useMemo, useRef, useState } from "react"

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
    const imagePaths = imageMatches.map((imageMatchArray) => imageMatchArray[1])

    return { imageList: imagePaths }
  },
  toBlock: function (data) {
    if (!data.imageList) {
      return
    }
    let returnString = `<div class="image-grid">`
    data.imageList.forEach(
      (image) => (returnString = returnString.concat(`<img src="${image}" alt="">`))
    )
    returnString = returnString.concat("</div>")
    return returnString
  },
  toPreview: function (data) {
    if (!data.imageList) {
      return
    }
    let returnString = "<div>"
    data.imageList.forEach(
      (image) =>
        (returnString = returnString.concat(`<img src="${image}" style="max-width:500px">`))
    )
    returnString = returnString.concat("</div>")

    return returnString
  }
})

CMS.registerEditorComponent({
  id: "leftAlignedImage",
  label: "Vänsterjusterad bild",
  hint: "Visar en bild vänsterjusterad med texten flödandes runt bilden",
  fields: [{ label: "Bild", name: "image", widget: "image" }],
  pattern: /^<img class="image-left" src="(\S*)">/ms,
  fromBlock: function (match) {
    return { image: match[1] }
  },
  toBlock: function (data) {
    return `<img class="image-left" src="${data.image}">`
  },
  toPreview: function (data) {
    return `<img src="${data.image}" style="max-width:500px">`
  }
})

CMS.registerEditorComponent({
  id: "video",
  label: "Video",
  hint: "Lägg till en video",
  fields: [{ label: "Video", name: "video", widget: "file" }],
  pattern: /^<video controls>(.*)<\/video>/ms,
  fromBlock: function (match) {
    const matchedString = match[0]
    const regexp = /src="(\S*)"/g
    const matchArray = regexp.exec(matchedString)

    return { video: matchArray[1] }
  },
  toBlock: function (data) {
    return `<video controls><source src="${data.video}" /></video>`
  },
  toPreview: function (data) {
    return `<video controls width="500"><source src="${data.video}" /></video>`
  }
})

const SMART_DATE_CONTROL_KEY = "smartDateControlKey"

const SmartDateControl = ({ value, ...props }) => {
  const lastSeenDate = useRef(null)
  const DatetimeControl = CMS.getWidget("datetime").control

  console.log(props)

  const customDate = useMemo(() => {
    console.log(value)
    console.log(lastSeenDate.current)

    const selectedDateString = value

    const selectedDate = new Date(selectedDateString)
    const todaysDate = new Date()
    console.log(new Date(selectedDate))

    //if (!hasDateBeenSet && !!selectedDateString && todaysDate.toISOString().slice(0,10) === selectedDate.toISOString().slice(0,10)) {
    if (
      (!lastSeenDate.current || lastSeenDate.current === value) &&
      !!selectedDateString &&
      todaysDate.toISOString().slice(0, 10) === selectedDate.toISOString().slice(0, 10)
    ) {
      // If we haven't seen a proper date yet, we are setting up the datetime widget
      // Load previously used date (if it exists)
      const sessionDate = sessionStorage.getItem(SMART_DATE_CONTROL_KEY)
      console.log("do some work")
      console.log("returning ", sessionDate ? sessionDate : value)
      console.log("read ", sessionDate)
      lastSeenDate.current = sessionDate ? sessionDate : value
      return sessionDate ? sessionDate : value
    } else {
      console.log("returning ", value)
      lastSeenDate.current = value
      if (!!value) {
        sessionStorage.setItem(SMART_DATE_CONTROL_KEY, value)
      }
      return value
    }
  }, [value])

  return (
    <div>
      <DatetimeControl value={customDate} {...props} />
    </div>
  )
}

const SmartDatePreview = (props) => {
  const DatetimePreview = CMS.getWidget("datetime").preview

  return (
    <div>
      <DatetimePreview {...props} />
    </div>
  )
}

CMS.registerWidget("smartdatetime", SmartDateControl, SmartDatePreview)
