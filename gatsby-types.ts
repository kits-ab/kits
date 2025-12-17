export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  GatsbyImageData: any
}

export type File = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>
  blksize: Maybe<Scalars["Int"]>
  blocks: Maybe<Scalars["Int"]>
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars["String"]>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>
  /** Returns all children nodes filtered by type ContentYaml */
  childrenContentYaml: Maybe<Array<Maybe<ContentYaml>>>
  /** Returns the first child node of type ContentYaml or null if there are no children of given type on this node */
  childContentYaml: Maybe<ContentYaml>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileAccessTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

/** Node Interface */
export type Node = {
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Internal = {
  content: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description: Maybe<Scalars["String"]>
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType: Maybe<Scalars["Boolean"]>
  mediaType: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
  contentFilePath: Maybe<Scalars["String"]>
}

export type Directory = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryAccessTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type Site = Node & {
  buildTime: Maybe<Scalars["Date"]>
  siteMetadata: Maybe<SiteSiteMetadata>
  port: Maybe<Scalars["Int"]>
  host: Maybe<Scalars["String"]>
  flags: Maybe<SiteFlags>
  polyfill: Maybe<Scalars["Boolean"]>
  pathPrefix: Maybe<Scalars["String"]>
  jsxRuntime: Maybe<Scalars["String"]>
  trailingSlash: Maybe<Scalars["String"]>
  graphqlTypegen: Maybe<Scalars["Boolean"]>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type SiteFlags = {
  DEV_SSR: Maybe<Scalars["Boolean"]>
}

export type SiteSiteMetadata = {
  title: Maybe<Scalars["String"]>
  description: Maybe<Scalars["String"]>
  siteUrl: Maybe<Scalars["String"]>
  author: Maybe<Scalars["String"]>
  rssBlogTitle: Maybe<Scalars["String"]>
  rssBlogDescription: Maybe<Scalars["String"]>
}

export type SiteFunction = Node & {
  functionRoute: Scalars["String"]
  pluginName: Scalars["String"]
  originalAbsoluteFilePath: Scalars["String"]
  originalRelativeFilePath: Scalars["String"]
  relativeCompiledFilePath: Scalars["String"]
  absoluteCompiledFilePath: Scalars["String"]
  matchPath: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePage = Node & {
  path: Scalars["String"]
  component: Scalars["String"]
  internalComponentName: Scalars["String"]
  componentChunkName: Scalars["String"]
  matchPath: Maybe<Scalars["String"]>
  pageContext: Maybe<Scalars["JSON"]>
  pluginCreator: Maybe<SitePlugin>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePlugin = Node & {
  resolve: Maybe<Scalars["String"]>
  name: Maybe<Scalars["String"]>
  version: Maybe<Scalars["String"]>
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath: Maybe<Scalars["String"]>
  pluginOptions: Maybe<Scalars["JSON"]>
  packageJson: Maybe<Scalars["JSON"]>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars["Date"]>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type GatsbyImageFormat = "NO_CHANGE" | "AUTO" | "JPG" | "PNG" | "WEBP" | "AVIF"

export type GatsbyImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED"

export type GatsbyImagePlaceholder = "DOMINANT_COLOR" | "TRACED_SVG" | "BLURRED" | "NONE"

export type MarkdownHeading = {
  id: Maybe<Scalars["String"]>
  value: Maybe<Scalars["String"]>
  depth: Maybe<Scalars["Int"]>
}

export type MarkdownHeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type MarkdownExcerptFormats = "PLAIN" | "HTML" | "MARKDOWN"

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars["Int"]>
  sentences: Maybe<Scalars["Int"]>
  words: Maybe<Scalars["Int"]>
}

export type MarkdownRemark = Node & {
  id: Scalars["ID"]
  frontmatter: Maybe<MarkdownRemarkFrontmatter>
  excerpt: Maybe<Scalars["String"]>
  rawMarkdownBody: Maybe<Scalars["String"]>
  fileAbsolutePath: Maybe<Scalars["String"]>
  fields: Maybe<MarkdownRemarkFields>
  html: Maybe<Scalars["String"]>
  htmlAst: Maybe<Scalars["JSON"]>
  excerptAst: Maybe<Scalars["JSON"]>
  headings: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead: Maybe<Scalars["Int"]>
  tableOfContents: Maybe<Scalars["String"]>
  wordCount: Maybe<MarkdownWordCount>
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars["Int"]>
  truncate?: InputMaybe<Scalars["Boolean"]>
  format?: InputMaybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars["Int"]>
  truncate?: InputMaybe<Scalars["Boolean"]>
}

export type MarkdownRemarkHeadingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars["Boolean"]>
  pathToSlugField?: InputMaybe<Scalars["String"]>
  maxDepth: InputMaybe<Scalars["Int"]>
  heading: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatter = {
  title: Maybe<Scalars["String"]>
  type: Maybe<Scalars["String"]>
  id: Maybe<Scalars["String"]>
  tagLine: Maybe<Scalars["String"]>
  image: Maybe<Scalars["String"]>
  avatar: Maybe<Scalars["String"]>
  phone: Maybe<Scalars["String"]>
  email: Maybe<Scalars["String"]>
  social: Maybe<MarkdownRemarkFrontmatterSocial>
  tags: Maybe<Array<Maybe<Scalars["String"]>>>
  authors: Maybe<Array<Maybe<Scalars["String"]>>>
  index: Maybe<Scalars["Int"]>
  href: Maybe<Scalars["String"]>
  alumni: Maybe<Scalars["Boolean"]>
  publishDate: Maybe<Scalars["Date"]>
  location: Maybe<Scalars["String"]>
  start: Maybe<Scalars["Date"]>
  end: Maybe<Scalars["Date"]>
  active: Maybe<Scalars["Boolean"]>
  images: Maybe<Array<Maybe<Scalars["String"]>>>
  schema: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSchema>>>
  heading: Maybe<Scalars["String"]>
  lead: Maybe<Scalars["String"]>
  collageImages: Maybe<Array<Maybe<MarkdownRemarkFrontmatterCollageImages>>>
  section1: Maybe<MarkdownRemarkFrontmatterSection1>
  section2: Maybe<MarkdownRemarkFrontmatterSection2>
  Telefon: Maybe<Scalars["String"]>
  content: Maybe<Scalars["String"]>
  section3: Maybe<MarkdownRemarkFrontmatterSection3>
  section4: Maybe<MarkdownRemarkFrontmatterSection4>
}

export type MarkdownRemarkFrontmatterPublishDateArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterStartArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterEndArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSocial = {
  github: Maybe<Scalars["String"]>
  linkedin: Maybe<Scalars["String"]>
  keybase: Maybe<Scalars["String"]>
  twitter: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSchema = {
  winner: Maybe<Scalars["Boolean"]>
  start: Maybe<Scalars["Date"]>
  end: Maybe<Scalars["String"]>
  title: Maybe<Scalars["String"]>
  type: Maybe<Scalars["String"]>
  details: Maybe<Scalars["String"]>
  location: Maybe<MarkdownRemarkFrontmatterSchemaLocation>
  presenters: Maybe<Array<Maybe<Scalars["String"]>>>
  externalpresenter: Maybe<MarkdownRemarkFrontmatterSchemaExternalpresenter>
  presentation: Maybe<Scalars["String"]>
  href: Maybe<Scalars["String"]>
  youtubeId: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSchemaStartArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSchemaLocation = {
  coordinates: Maybe<Array<Maybe<Scalars["Float"]>>>
  title: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSchemaExternalpresenter = {
  name: Maybe<Scalars["String"]>
  avatarSrc: Maybe<Scalars["String"]>
  href: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterCollageImages = {
  collageImage: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSection1 = {
  heading: Maybe<Scalars["String"]>
  subheading: Maybe<Scalars["String"]>
  content: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSection2 = {
  content: Maybe<Scalars["String"]>
  heading: Maybe<Scalars["String"]>
  subheading: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSection3 = {
  heading: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterSection4 = {
  heading: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFields = {
  href: Maybe<Scalars["String"]>
  date: Maybe<Scalars["Date"]>
}

export type MarkdownRemarkFieldsDateArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type ImageFormat = "NO_CHANGE" | "AUTO" | "JPG" | "PNG" | "WEBP" | "AVIF"

export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE"

export type ImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED"

export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION"

export type DuotoneGradient = {
  highlight: Scalars["String"]
  shadow: Scalars["String"]
  opacity: InputMaybe<Scalars["Int"]>
}

export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY"

export type Potrace = {
  turnPolicy: InputMaybe<PotraceTurnPolicy>
  turdSize: InputMaybe<Scalars["Float"]>
  alphaMax: InputMaybe<Scalars["Float"]>
  optCurve: InputMaybe<Scalars["Boolean"]>
  optTolerance: InputMaybe<Scalars["Float"]>
  threshold: InputMaybe<Scalars["Int"]>
  blackOnWhite: InputMaybe<Scalars["Boolean"]>
  color: InputMaybe<Scalars["String"]>
  background: InputMaybe<Scalars["String"]>
}

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>
  fluid: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars["GatsbyImageData"]
  original: Maybe<ImageSharpOriginal>
  resize: Maybe<ImageSharpResize>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width: InputMaybe<Scalars["Int"]>
  height: InputMaybe<Scalars["Int"]>
  base64Width: InputMaybe<Scalars["Int"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  duotone: InputMaybe<DuotoneGradient>
  traceSVG: InputMaybe<Potrace>
  quality: InputMaybe<Scalars["Int"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  webpQuality: InputMaybe<Scalars["Int"]>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars["String"]>
  rotate?: InputMaybe<Scalars["Int"]>
  trim?: InputMaybe<Scalars["Float"]>
}

export type ImageSharpFluidArgs = {
  maxWidth: InputMaybe<Scalars["Int"]>
  maxHeight: InputMaybe<Scalars["Int"]>
  base64Width: InputMaybe<Scalars["Int"]>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  duotone: InputMaybe<DuotoneGradient>
  traceSVG: InputMaybe<Potrace>
  quality: InputMaybe<Scalars["Int"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  webpQuality: InputMaybe<Scalars["Int"]>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars["String"]>
  rotate?: InputMaybe<Scalars["Int"]>
  trim?: InputMaybe<Scalars["Float"]>
  sizes?: InputMaybe<Scalars["String"]>
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>
  width: InputMaybe<Scalars["Int"]>
  height: InputMaybe<Scalars["Int"]>
  aspectRatio: InputMaybe<Scalars["Float"]>
  placeholder: InputMaybe<ImagePlaceholder>
  blurredOptions: InputMaybe<BlurredOptions>
  tracedSVGOptions: InputMaybe<Potrace>
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  breakpoints: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  sizes: InputMaybe<Scalars["String"]>
  quality: InputMaybe<Scalars["Int"]>
  jpgOptions: InputMaybe<JpgOptions>
  pngOptions: InputMaybe<PngOptions>
  webpOptions: InputMaybe<WebPOptions>
  avifOptions: InputMaybe<AvifOptions>
  transformOptions: InputMaybe<TransformOptions>
  backgroundColor: InputMaybe<Scalars["String"]>
}

export type ImageSharpResizeArgs = {
  width: InputMaybe<Scalars["Int"]>
  height: InputMaybe<Scalars["Int"]>
  quality: InputMaybe<Scalars["Int"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  webpQuality: InputMaybe<Scalars["Int"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  duotone: InputMaybe<DuotoneGradient>
  base64?: InputMaybe<Scalars["Boolean"]>
  traceSVG: InputMaybe<Potrace>
  toFormat?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars["String"]>
  rotate?: InputMaybe<Scalars["Int"]>
  trim?: InputMaybe<Scalars["Float"]>
}

export type ImageSharpFixed = {
  base64: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
  aspectRatio: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp: Maybe<Scalars["String"]>
  srcSetWebp: Maybe<Scalars["String"]>
  originalName: Maybe<Scalars["String"]>
}

export type ImageSharpFluid = {
  base64: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp: Maybe<Scalars["String"]>
  srcSetWebp: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
  originalImg: Maybe<Scalars["String"]>
  originalName: Maybe<Scalars["String"]>
  presentationWidth: Scalars["Int"]
  presentationHeight: Scalars["Int"]
}

export type ImagePlaceholder = "DOMINANT_COLOR" | "TRACED_SVG" | "BLURRED" | "NONE"

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars["Int"]>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>
}

export type JpgOptions = {
  quality: InputMaybe<Scalars["Int"]>
  progressive: InputMaybe<Scalars["Boolean"]>
}

export type PngOptions = {
  quality: InputMaybe<Scalars["Int"]>
  compressionSpeed: InputMaybe<Scalars["Int"]>
}

export type WebPOptions = {
  quality: InputMaybe<Scalars["Int"]>
}

export type AvifOptions = {
  quality: InputMaybe<Scalars["Int"]>
  lossless: InputMaybe<Scalars["Boolean"]>
  speed: InputMaybe<Scalars["Int"]>
}

export type TransformOptions = {
  grayscale: InputMaybe<Scalars["Boolean"]>
  duotone: InputMaybe<DuotoneGradient>
  rotate: InputMaybe<Scalars["Int"]>
  trim: InputMaybe<Scalars["Float"]>
  cropFocus: InputMaybe<ImageCropFocus>
  fit: InputMaybe<ImageFit>
}

export type ImageSharpOriginal = {
  width: Maybe<Scalars["Float"]>
  height: Maybe<Scalars["Float"]>
  src: Maybe<Scalars["String"]>
}

export type ImageSharpResize = {
  src: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
  width: Maybe<Scalars["Int"]>
  height: Maybe<Scalars["Int"]>
  aspectRatio: Maybe<Scalars["Float"]>
  originalName: Maybe<Scalars["String"]>
}

export type TeamtailorJob = Node & {
  fields: Maybe<TeamtailorJobFields>
  attributes: Maybe<TeamtailorJobAttributes>
  links: Maybe<TeamtailorJobLinks>
  type: Maybe<Scalars["String"]>
  relationships: Maybe<TeamtailorJobRelationships>
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type TeamtailorJobRelationships = {
  department: Maybe<TeamtailorJobRelationshipsDepartment>
  role: Maybe<TeamtailorJobRelationshipsRole>
  location: Maybe<TeamtailorJobRelationshipsLocation>
  user: Maybe<TeamtailorJobRelationshipsUser>
  questions: Maybe<TeamtailorJobRelationshipsQuestions>
  candidates: Maybe<TeamtailorJobRelationshipsCandidates>
  stages: Maybe<TeamtailorJobRelationshipsStages>
  colleagues: Maybe<TeamtailorJobRelationshipsColleagues>
  team_memberships: Maybe<TeamtailorJobRelationshipsTeam_Memberships>
  picked_questions: Maybe<TeamtailorJobRelationshipsPicked_Questions>
}

export type TeamtailorJobRelationshipsDepartment = {
  links: Maybe<TeamtailorJobRelationshipsDepartmentLinks>
}

export type TeamtailorJobRelationshipsDepartmentLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsRole = {
  data: Maybe<TeamtailorJobRelationshipsRoleData>
}

export type TeamtailorJobRelationshipsRoleData = {
  id: Maybe<Scalars["String"]>
  type: Maybe<Scalars["String"]>
  links: Maybe<TeamtailorJobRelationshipsRoleDataLinks>
  attributes: Maybe<TeamtailorJobRelationshipsRoleDataAttributes>
  relationships: Maybe<TeamtailorJobRelationshipsRoleDataRelationships>
}

export type TeamtailorJobRelationshipsRoleDataLinks = {
  self: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsRoleDataAttributes = {
  name: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsRoleDataRelationships = {
  department: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartment>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartment = {
  links: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinks>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsLocation = {
  links: Maybe<TeamtailorJobRelationshipsLocationLinks>
}

export type TeamtailorJobRelationshipsLocationLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsUser = {
  links: Maybe<TeamtailorJobRelationshipsUserLinks>
}

export type TeamtailorJobRelationshipsUserLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsQuestions = {
  links: Maybe<TeamtailorJobRelationshipsQuestionsLinks>
}

export type TeamtailorJobRelationshipsQuestionsLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsCandidates = {
  links: Maybe<TeamtailorJobRelationshipsCandidatesLinks>
}

export type TeamtailorJobRelationshipsCandidatesLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsStages = {
  links: Maybe<TeamtailorJobRelationshipsStagesLinks>
}

export type TeamtailorJobRelationshipsStagesLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsColleagues = {
  links: Maybe<TeamtailorJobRelationshipsColleaguesLinks>
}

export type TeamtailorJobRelationshipsColleaguesLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsTeam_Memberships = {
  links: Maybe<TeamtailorJobRelationshipsTeam_MembershipsLinks>
}

export type TeamtailorJobRelationshipsTeam_MembershipsLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobRelationshipsPicked_Questions = {
  links: Maybe<TeamtailorJobRelationshipsPicked_QuestionsLinks>
}

export type TeamtailorJobRelationshipsPicked_QuestionsLinks = {
  self: Maybe<Scalars["String"]>
  related: Maybe<Scalars["String"]>
}

export type TeamtailorJobFields = {
  href: Maybe<Scalars["String"]>
}

export type TeamtailorJobAttributes = {
  title: Maybe<Scalars["String"]>
  body: Maybe<Scalars["String"]>
  apply_button_text: Maybe<Scalars["String"]>
  human_status: Maybe<Scalars["String"]>
  internal: Maybe<Scalars["Boolean"]>
  picture: Maybe<TeamtailorJobAttributesPicture>
  pinned: Maybe<Scalars["Boolean"]>
  status: Maybe<Scalars["String"]>
  external_application_url: Maybe<Scalars["String"]>
  name_requirement: Maybe<Scalars["String"]>
  resume_requirement: Maybe<Scalars["String"]>
  cover_letter_requirement: Maybe<Scalars["String"]>
  phone_requirement: Maybe<Scalars["String"]>
  created_at: Maybe<Scalars["Date"]>
}

export type TeamtailorJobAttributesCreated_AtArgs = {
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  difference: InputMaybe<Scalars["String"]>
  locale: InputMaybe<Scalars["String"]>
}

export type TeamtailorJobAttributesPicture = {
  standard: Maybe<Scalars["String"]>
  thumb: Maybe<Scalars["String"]>
}

export type TeamtailorJobLinks = {
  careersite_job_apply_url: Maybe<Scalars["String"]>
  careersite_job_url: Maybe<Scalars["String"]>
  careersite_job_apply_iframe_url: Maybe<Scalars["String"]>
  self: Maybe<Scalars["String"]>
}

export type O365User = Node & {
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  businessPhones: Maybe<Array<Maybe<Scalars["String"]>>>
  displayName: Maybe<Scalars["String"]>
  givenName: Maybe<Scalars["String"]>
  mail: Maybe<Scalars["String"]>
  mobilePhone: Maybe<Scalars["String"]>
  officeLocation: Maybe<Scalars["String"]>
  preferredLanguage: Maybe<Scalars["String"]>
  surname: Maybe<Scalars["String"]>
  userPrincipalName: Maybe<Scalars["String"]>
}

export type ContentYaml = Node & {
  id: Scalars["ID"]
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name: Maybe<Scalars["String"]>
  address: Maybe<ContentYamlAddress>
  coordinates: Maybe<Array<Maybe<Scalars["Float"]>>>
  email: Maybe<Scalars["String"]>
  phone: Maybe<Scalars["String"]>
  social: Maybe<ContentYamlSocial>
  contacts: Maybe<Array<Maybe<ContentYamlContacts>>>
}

export type ContentYamlAddress = {
  street: Maybe<Scalars["String"]>
  postalCode: Maybe<Scalars["String"]>
  city: Maybe<Scalars["String"]>
}

export type ContentYamlSocial = {
  bitbucket: Maybe<Scalars["String"]>
  facebook: Maybe<Scalars["String"]>
  github: Maybe<Scalars["String"]>
  instagram: Maybe<Scalars["String"]>
  linkedin: Maybe<Scalars["String"]>
  twitter: Maybe<Scalars["String"]>
}

export type ContentYamlContacts = {
  role: Maybe<Scalars["String"]>
  personId: Maybe<Scalars["String"]>
}

export type Query = {
  file: Maybe<File>
  allFile: FileConnection
  directory: Maybe<Directory>
  allDirectory: DirectoryConnection
  site: Maybe<Site>
  allSite: SiteConnection
  siteFunction: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage: Maybe<SitePage>
  allSitePage: SitePageConnection
  sitePlugin: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  markdownRemark: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  imageSharp: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  teamtailorJob: Maybe<TeamtailorJob>
  allTeamtailorJob: TeamtailorJobConnection
  o365User: Maybe<O365User>
  allO365User: O365UserConnection
  contentYaml: Maybe<ContentYaml>
  allContentYaml: ContentYamlConnection
}

export type QueryFileArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  absolutePath: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  mode: InputMaybe<IntQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>
  childImageSharp: InputMaybe<ImageSharpFilterInput>
  childrenContentYaml: InputMaybe<ContentYamlFilterListInput>
  childContentYaml: InputMaybe<ContentYamlFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>
  sort: InputMaybe<Array<InputMaybe<FileSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryDirectoryArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  absolutePath: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  mode: InputMaybe<IntQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>
  sort: InputMaybe<Array<InputMaybe<DirectorySortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  port: InputMaybe<IntQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>
  sort: InputMaybe<Array<InputMaybe<SiteSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QuerySiteFunctionArgs = {
  functionRoute: InputMaybe<StringQueryOperatorInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>
  sort: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QuerySitePageArgs = {
  path: InputMaybe<StringQueryOperatorInput>
  component: InputMaybe<StringQueryOperatorInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>
  sort: InputMaybe<Array<InputMaybe<SitePageSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QuerySitePluginArgs = {
  resolve: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>
  sort: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>
  sort: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryMarkdownRemarkArgs = {
  id: InputMaybe<StringQueryOperatorInput>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt: InputMaybe<StringQueryOperatorInput>
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>
  fields: InputMaybe<MarkdownRemarkFieldsFilterInput>
  html: InputMaybe<StringQueryOperatorInput>
  htmlAst: InputMaybe<JsonQueryOperatorInput>
  excerptAst: InputMaybe<JsonQueryOperatorInput>
  headings: InputMaybe<MarkdownHeadingFilterListInput>
  timeToRead: InputMaybe<IntQueryOperatorInput>
  tableOfContents: InputMaybe<StringQueryOperatorInput>
  wordCount: InputMaybe<MarkdownWordCountFilterInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>
  sort: InputMaybe<Array<InputMaybe<MarkdownRemarkSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryImageSharpArgs = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>
  fluid: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original: InputMaybe<ImageSharpOriginalFilterInput>
  resize: InputMaybe<ImageSharpResizeFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>
  sort: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryTeamtailorJobArgs = {
  fields: InputMaybe<TeamtailorJobFieldsFilterInput>
  attributes: InputMaybe<TeamtailorJobAttributesFilterInput>
  links: InputMaybe<TeamtailorJobLinksFilterInput>
  type: InputMaybe<StringQueryOperatorInput>
  relationships: InputMaybe<TeamtailorJobRelationshipsFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type QueryAllTeamtailorJobArgs = {
  filter: InputMaybe<TeamtailorJobFilterInput>
  sort: InputMaybe<Array<InputMaybe<TeamtailorJobSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryO365UserArgs = {
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
  businessPhones: InputMaybe<StringQueryOperatorInput>
  displayName: InputMaybe<StringQueryOperatorInput>
  givenName: InputMaybe<StringQueryOperatorInput>
  mail: InputMaybe<StringQueryOperatorInput>
  mobilePhone: InputMaybe<StringQueryOperatorInput>
  officeLocation: InputMaybe<StringQueryOperatorInput>
  preferredLanguage: InputMaybe<StringQueryOperatorInput>
  surname: InputMaybe<StringQueryOperatorInput>
  userPrincipalName: InputMaybe<StringQueryOperatorInput>
}

export type QueryAllO365UserArgs = {
  filter: InputMaybe<O365UserFilterInput>
  sort: InputMaybe<Array<InputMaybe<O365UserSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type QueryContentYamlArgs = {
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  address: InputMaybe<ContentYamlAddressFilterInput>
  coordinates: InputMaybe<FloatQueryOperatorInput>
  email: InputMaybe<StringQueryOperatorInput>
  phone: InputMaybe<StringQueryOperatorInput>
  social: InputMaybe<ContentYamlSocialFilterInput>
  contacts: InputMaybe<ContentYamlContactsFilterListInput>
}

export type QueryAllContentYamlArgs = {
  filter: InputMaybe<ContentYamlFilterInput>
  sort: InputMaybe<Array<InputMaybe<ContentYamlSortInput>>>
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars["String"]>
  ne: InputMaybe<Scalars["String"]>
  in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  regex: InputMaybe<Scalars["String"]>
  glob: InputMaybe<Scalars["String"]>
}

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars["Int"]>
  ne: InputMaybe<Scalars["Int"]>
  gt: InputMaybe<Scalars["Int"]>
  gte: InputMaybe<Scalars["Int"]>
  lt: InputMaybe<Scalars["Int"]>
  lte: InputMaybe<Scalars["Int"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars["Date"]>
  ne: InputMaybe<Scalars["Date"]>
  gt: InputMaybe<Scalars["Date"]>
  gte: InputMaybe<Scalars["Date"]>
  lt: InputMaybe<Scalars["Date"]>
  lte: InputMaybe<Scalars["Date"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
}

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars["Float"]>
  ne: InputMaybe<Scalars["Float"]>
  gt: InputMaybe<Scalars["Float"]>
  gte: InputMaybe<Scalars["Float"]>
  lt: InputMaybe<Scalars["Float"]>
  lte: InputMaybe<Scalars["Float"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt: InputMaybe<StringQueryOperatorInput>
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>
  fields: InputMaybe<MarkdownRemarkFieldsFilterInput>
  html: InputMaybe<StringQueryOperatorInput>
  htmlAst: InputMaybe<JsonQueryOperatorInput>
  excerptAst: InputMaybe<JsonQueryOperatorInput>
  headings: InputMaybe<MarkdownHeadingFilterListInput>
  timeToRead: InputMaybe<IntQueryOperatorInput>
  tableOfContents: InputMaybe<StringQueryOperatorInput>
  wordCount: InputMaybe<MarkdownWordCountFilterInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  tagLine: InputMaybe<StringQueryOperatorInput>
  image: InputMaybe<StringQueryOperatorInput>
  avatar: InputMaybe<StringQueryOperatorInput>
  phone: InputMaybe<StringQueryOperatorInput>
  email: InputMaybe<StringQueryOperatorInput>
  social: InputMaybe<MarkdownRemarkFrontmatterSocialFilterInput>
  tags: InputMaybe<StringQueryOperatorInput>
  authors: InputMaybe<StringQueryOperatorInput>
  index: InputMaybe<IntQueryOperatorInput>
  href: InputMaybe<StringQueryOperatorInput>
  alumni: InputMaybe<BooleanQueryOperatorInput>
  publishDate: InputMaybe<DateQueryOperatorInput>
  location: InputMaybe<StringQueryOperatorInput>
  start: InputMaybe<DateQueryOperatorInput>
  end: InputMaybe<DateQueryOperatorInput>
  active: InputMaybe<BooleanQueryOperatorInput>
  images: InputMaybe<StringQueryOperatorInput>
  schema: InputMaybe<MarkdownRemarkFrontmatterSchemaFilterListInput>
  heading: InputMaybe<StringQueryOperatorInput>
  lead: InputMaybe<StringQueryOperatorInput>
  collageImages: InputMaybe<MarkdownRemarkFrontmatterCollageImagesFilterListInput>
  section1: InputMaybe<MarkdownRemarkFrontmatterSection1FilterInput>
  section2: InputMaybe<MarkdownRemarkFrontmatterSection2FilterInput>
  Telefon: InputMaybe<StringQueryOperatorInput>
  content: InputMaybe<StringQueryOperatorInput>
  section3: InputMaybe<MarkdownRemarkFrontmatterSection3FilterInput>
  section4: InputMaybe<MarkdownRemarkFrontmatterSection4FilterInput>
}

export type MarkdownRemarkFrontmatterSocialFilterInput = {
  github: InputMaybe<StringQueryOperatorInput>
  linkedin: InputMaybe<StringQueryOperatorInput>
  keybase: InputMaybe<StringQueryOperatorInput>
  twitter: InputMaybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars["Boolean"]>
  ne: InputMaybe<Scalars["Boolean"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
}

export type MarkdownRemarkFrontmatterSchemaFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFrontmatterSchemaFilterInput>
}

export type MarkdownRemarkFrontmatterSchemaFilterInput = {
  winner: InputMaybe<BooleanQueryOperatorInput>
  start: InputMaybe<DateQueryOperatorInput>
  end: InputMaybe<StringQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
  details: InputMaybe<StringQueryOperatorInput>
  location: InputMaybe<MarkdownRemarkFrontmatterSchemaLocationFilterInput>
  presenters: InputMaybe<StringQueryOperatorInput>
  externalpresenter: InputMaybe<MarkdownRemarkFrontmatterSchemaExternalpresenterFilterInput>
  presentation: InputMaybe<StringQueryOperatorInput>
  href: InputMaybe<StringQueryOperatorInput>
  youtubeId: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSchemaLocationFilterInput = {
  coordinates: InputMaybe<FloatQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSchemaExternalpresenterFilterInput = {
  name: InputMaybe<StringQueryOperatorInput>
  avatarSrc: InputMaybe<StringQueryOperatorInput>
  href: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterCollageImagesFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFrontmatterCollageImagesFilterInput>
}

export type MarkdownRemarkFrontmatterCollageImagesFilterInput = {
  collageImage: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSection1FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>
  subheading: InputMaybe<StringQueryOperatorInput>
  content: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSection2FilterInput = {
  content: InputMaybe<StringQueryOperatorInput>
  heading: InputMaybe<StringQueryOperatorInput>
  subheading: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSection3FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFrontmatterSection4FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFieldsFilterInput = {
  href: InputMaybe<StringQueryOperatorInput>
  date: InputMaybe<DateQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars["JSON"]>
  ne: InputMaybe<Scalars["JSON"]>
  in: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  regex: InputMaybe<Scalars["JSON"]>
  glob: InputMaybe<Scalars["JSON"]>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch: InputMaybe<MarkdownHeadingFilterInput>
}

export type MarkdownHeadingFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  value: InputMaybe<StringQueryOperatorInput>
  depth: InputMaybe<IntQueryOperatorInput>
}

export type MarkdownWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>
  sentences: InputMaybe<IntQueryOperatorInput>
  words: InputMaybe<IntQueryOperatorInput>
}

export type NodeFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>
  contentDigest: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  fieldOwners: InputMaybe<StringQueryOperatorInput>
  ignoreType: InputMaybe<BooleanQueryOperatorInput>
  mediaType: InputMaybe<StringQueryOperatorInput>
  owner: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
  contentFilePath: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>
  fluid: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original: InputMaybe<ImageSharpOriginalFilterInput>
  resize: InputMaybe<ImageSharpResizeFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  width: InputMaybe<FloatQueryOperatorInput>
  height: InputMaybe<FloatQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  srcSet: InputMaybe<StringQueryOperatorInput>
  srcWebp: InputMaybe<StringQueryOperatorInput>
  srcSetWebp: InputMaybe<StringQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  srcSet: InputMaybe<StringQueryOperatorInput>
  srcWebp: InputMaybe<StringQueryOperatorInput>
  srcSetWebp: InputMaybe<StringQueryOperatorInput>
  sizes: InputMaybe<StringQueryOperatorInput>
  originalImg: InputMaybe<StringQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
  presentationWidth: InputMaybe<IntQueryOperatorInput>
  presentationHeight: InputMaybe<IntQueryOperatorInput>
}

export type GatsbyImageDataQueryOperatorInput = {
  eq: InputMaybe<Scalars["GatsbyImageData"]>
  ne: InputMaybe<Scalars["GatsbyImageData"]>
  in: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>
  nin: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>
}

export type ImageSharpOriginalFilterInput = {
  width: InputMaybe<FloatQueryOperatorInput>
  height: InputMaybe<FloatQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
  height: InputMaybe<IntQueryOperatorInput>
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
}

export type ContentYamlFilterListInput = {
  elemMatch: InputMaybe<ContentYamlFilterInput>
}

export type ContentYamlFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  address: InputMaybe<ContentYamlAddressFilterInput>
  coordinates: InputMaybe<FloatQueryOperatorInput>
  email: InputMaybe<StringQueryOperatorInput>
  phone: InputMaybe<StringQueryOperatorInput>
  social: InputMaybe<ContentYamlSocialFilterInput>
  contacts: InputMaybe<ContentYamlContactsFilterListInput>
}

export type ContentYamlAddressFilterInput = {
  street: InputMaybe<StringQueryOperatorInput>
  postalCode: InputMaybe<StringQueryOperatorInput>
  city: InputMaybe<StringQueryOperatorInput>
}

export type ContentYamlSocialFilterInput = {
  bitbucket: InputMaybe<StringQueryOperatorInput>
  facebook: InputMaybe<StringQueryOperatorInput>
  github: InputMaybe<StringQueryOperatorInput>
  instagram: InputMaybe<StringQueryOperatorInput>
  linkedin: InputMaybe<StringQueryOperatorInput>
  twitter: InputMaybe<StringQueryOperatorInput>
}

export type ContentYamlContactsFilterListInput = {
  elemMatch: InputMaybe<ContentYamlContactsFilterInput>
}

export type ContentYamlContactsFilterInput = {
  role: InputMaybe<StringQueryOperatorInput>
  personId: InputMaybe<StringQueryOperatorInput>
}

export type FileConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldSelector
}

export type FileConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: FileFieldSelector
}

export type FileEdge = {
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export type PageInfo = {
  currentPage: Scalars["Int"]
  hasPreviousPage: Scalars["Boolean"]
  hasNextPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

export type FileFieldSelector = {
  sourceInstanceName: InputMaybe<FieldSelectorEnum>
  absolutePath: InputMaybe<FieldSelectorEnum>
  relativePath: InputMaybe<FieldSelectorEnum>
  extension: InputMaybe<FieldSelectorEnum>
  size: InputMaybe<FieldSelectorEnum>
  prettySize: InputMaybe<FieldSelectorEnum>
  modifiedTime: InputMaybe<FieldSelectorEnum>
  accessTime: InputMaybe<FieldSelectorEnum>
  changeTime: InputMaybe<FieldSelectorEnum>
  birthTime: InputMaybe<FieldSelectorEnum>
  root: InputMaybe<FieldSelectorEnum>
  dir: InputMaybe<FieldSelectorEnum>
  base: InputMaybe<FieldSelectorEnum>
  ext: InputMaybe<FieldSelectorEnum>
  name: InputMaybe<FieldSelectorEnum>
  relativeDirectory: InputMaybe<FieldSelectorEnum>
  dev: InputMaybe<FieldSelectorEnum>
  mode: InputMaybe<FieldSelectorEnum>
  nlink: InputMaybe<FieldSelectorEnum>
  uid: InputMaybe<FieldSelectorEnum>
  gid: InputMaybe<FieldSelectorEnum>
  rdev: InputMaybe<FieldSelectorEnum>
  ino: InputMaybe<FieldSelectorEnum>
  atimeMs: InputMaybe<FieldSelectorEnum>
  mtimeMs: InputMaybe<FieldSelectorEnum>
  ctimeMs: InputMaybe<FieldSelectorEnum>
  atime: InputMaybe<FieldSelectorEnum>
  mtime: InputMaybe<FieldSelectorEnum>
  ctime: InputMaybe<FieldSelectorEnum>
  birthtime: InputMaybe<FieldSelectorEnum>
  birthtimeMs: InputMaybe<FieldSelectorEnum>
  blksize: InputMaybe<FieldSelectorEnum>
  blocks: InputMaybe<FieldSelectorEnum>
  publicURL: InputMaybe<FieldSelectorEnum>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFieldSelector>
  childMarkdownRemark: InputMaybe<MarkdownRemarkFieldSelector>
  childrenImageSharp: InputMaybe<ImageSharpFieldSelector>
  childImageSharp: InputMaybe<ImageSharpFieldSelector>
  childrenContentYaml: InputMaybe<ContentYamlFieldSelector>
  childContentYaml: InputMaybe<ContentYamlFieldSelector>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type FieldSelectorEnum = "SELECT"

export type MarkdownRemarkFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFieldSelector>
  excerpt: InputMaybe<FieldSelectorEnum>
  rawMarkdownBody: InputMaybe<FieldSelectorEnum>
  fileAbsolutePath: InputMaybe<FieldSelectorEnum>
  fields: InputMaybe<MarkdownRemarkFieldsFieldSelector>
  html: InputMaybe<FieldSelectorEnum>
  htmlAst: InputMaybe<FieldSelectorEnum>
  excerptAst: InputMaybe<FieldSelectorEnum>
  headings: InputMaybe<MarkdownHeadingFieldSelector>
  timeToRead: InputMaybe<FieldSelectorEnum>
  tableOfContents: InputMaybe<FieldSelectorEnum>
  wordCount: InputMaybe<MarkdownWordCountFieldSelector>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type MarkdownRemarkFrontmatterFieldSelector = {
  title: InputMaybe<FieldSelectorEnum>
  type: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  tagLine: InputMaybe<FieldSelectorEnum>
  image: InputMaybe<FieldSelectorEnum>
  avatar: InputMaybe<FieldSelectorEnum>
  phone: InputMaybe<FieldSelectorEnum>
  email: InputMaybe<FieldSelectorEnum>
  social: InputMaybe<MarkdownRemarkFrontmatterSocialFieldSelector>
  tags: InputMaybe<FieldSelectorEnum>
  authors: InputMaybe<FieldSelectorEnum>
  index: InputMaybe<FieldSelectorEnum>
  href: InputMaybe<FieldSelectorEnum>
  alumni: InputMaybe<FieldSelectorEnum>
  publishDate: InputMaybe<FieldSelectorEnum>
  location: InputMaybe<FieldSelectorEnum>
  start: InputMaybe<FieldSelectorEnum>
  end: InputMaybe<FieldSelectorEnum>
  active: InputMaybe<FieldSelectorEnum>
  images: InputMaybe<FieldSelectorEnum>
  schema: InputMaybe<MarkdownRemarkFrontmatterSchemaFieldSelector>
  heading: InputMaybe<FieldSelectorEnum>
  lead: InputMaybe<FieldSelectorEnum>
  collageImages: InputMaybe<MarkdownRemarkFrontmatterCollageImagesFieldSelector>
  section1: InputMaybe<MarkdownRemarkFrontmatterSection1FieldSelector>
  section2: InputMaybe<MarkdownRemarkFrontmatterSection2FieldSelector>
  Telefon: InputMaybe<FieldSelectorEnum>
  content: InputMaybe<FieldSelectorEnum>
  section3: InputMaybe<MarkdownRemarkFrontmatterSection3FieldSelector>
  section4: InputMaybe<MarkdownRemarkFrontmatterSection4FieldSelector>
}

export type MarkdownRemarkFrontmatterSocialFieldSelector = {
  github: InputMaybe<FieldSelectorEnum>
  linkedin: InputMaybe<FieldSelectorEnum>
  keybase: InputMaybe<FieldSelectorEnum>
  twitter: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSchemaFieldSelector = {
  winner: InputMaybe<FieldSelectorEnum>
  start: InputMaybe<FieldSelectorEnum>
  end: InputMaybe<FieldSelectorEnum>
  title: InputMaybe<FieldSelectorEnum>
  type: InputMaybe<FieldSelectorEnum>
  details: InputMaybe<FieldSelectorEnum>
  location: InputMaybe<MarkdownRemarkFrontmatterSchemaLocationFieldSelector>
  presenters: InputMaybe<FieldSelectorEnum>
  externalpresenter: InputMaybe<MarkdownRemarkFrontmatterSchemaExternalpresenterFieldSelector>
  presentation: InputMaybe<FieldSelectorEnum>
  href: InputMaybe<FieldSelectorEnum>
  youtubeId: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSchemaLocationFieldSelector = {
  coordinates: InputMaybe<FieldSelectorEnum>
  title: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSchemaExternalpresenterFieldSelector = {
  name: InputMaybe<FieldSelectorEnum>
  avatarSrc: InputMaybe<FieldSelectorEnum>
  href: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterCollageImagesFieldSelector = {
  collageImage: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSection1FieldSelector = {
  heading: InputMaybe<FieldSelectorEnum>
  subheading: InputMaybe<FieldSelectorEnum>
  content: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSection2FieldSelector = {
  content: InputMaybe<FieldSelectorEnum>
  heading: InputMaybe<FieldSelectorEnum>
  subheading: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSection3FieldSelector = {
  heading: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFrontmatterSection4FieldSelector = {
  heading: InputMaybe<FieldSelectorEnum>
}

export type MarkdownRemarkFieldsFieldSelector = {
  href: InputMaybe<FieldSelectorEnum>
  date: InputMaybe<FieldSelectorEnum>
}

export type MarkdownHeadingFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  value: InputMaybe<FieldSelectorEnum>
  depth: InputMaybe<FieldSelectorEnum>
}

export type MarkdownWordCountFieldSelector = {
  paragraphs: InputMaybe<FieldSelectorEnum>
  sentences: InputMaybe<FieldSelectorEnum>
  words: InputMaybe<FieldSelectorEnum>
}

export type NodeFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type InternalFieldSelector = {
  content: InputMaybe<FieldSelectorEnum>
  contentDigest: InputMaybe<FieldSelectorEnum>
  description: InputMaybe<FieldSelectorEnum>
  fieldOwners: InputMaybe<FieldSelectorEnum>
  ignoreType: InputMaybe<FieldSelectorEnum>
  mediaType: InputMaybe<FieldSelectorEnum>
  owner: InputMaybe<FieldSelectorEnum>
  type: InputMaybe<FieldSelectorEnum>
  contentFilePath: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpFieldSelector = {
  fixed: InputMaybe<ImageSharpFixedFieldSelector>
  fluid: InputMaybe<ImageSharpFluidFieldSelector>
  gatsbyImageData: InputMaybe<FieldSelectorEnum>
  original: InputMaybe<ImageSharpOriginalFieldSelector>
  resize: InputMaybe<ImageSharpResizeFieldSelector>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type ImageSharpFixedFieldSelector = {
  base64: InputMaybe<FieldSelectorEnum>
  tracedSVG: InputMaybe<FieldSelectorEnum>
  aspectRatio: InputMaybe<FieldSelectorEnum>
  width: InputMaybe<FieldSelectorEnum>
  height: InputMaybe<FieldSelectorEnum>
  src: InputMaybe<FieldSelectorEnum>
  srcSet: InputMaybe<FieldSelectorEnum>
  srcWebp: InputMaybe<FieldSelectorEnum>
  srcSetWebp: InputMaybe<FieldSelectorEnum>
  originalName: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpFluidFieldSelector = {
  base64: InputMaybe<FieldSelectorEnum>
  tracedSVG: InputMaybe<FieldSelectorEnum>
  aspectRatio: InputMaybe<FieldSelectorEnum>
  src: InputMaybe<FieldSelectorEnum>
  srcSet: InputMaybe<FieldSelectorEnum>
  srcWebp: InputMaybe<FieldSelectorEnum>
  srcSetWebp: InputMaybe<FieldSelectorEnum>
  sizes: InputMaybe<FieldSelectorEnum>
  originalImg: InputMaybe<FieldSelectorEnum>
  originalName: InputMaybe<FieldSelectorEnum>
  presentationWidth: InputMaybe<FieldSelectorEnum>
  presentationHeight: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpOriginalFieldSelector = {
  width: InputMaybe<FieldSelectorEnum>
  height: InputMaybe<FieldSelectorEnum>
  src: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpResizeFieldSelector = {
  src: InputMaybe<FieldSelectorEnum>
  tracedSVG: InputMaybe<FieldSelectorEnum>
  width: InputMaybe<FieldSelectorEnum>
  height: InputMaybe<FieldSelectorEnum>
  aspectRatio: InputMaybe<FieldSelectorEnum>
  originalName: InputMaybe<FieldSelectorEnum>
}

export type ContentYamlFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
  name: InputMaybe<FieldSelectorEnum>
  address: InputMaybe<ContentYamlAddressFieldSelector>
  coordinates: InputMaybe<FieldSelectorEnum>
  email: InputMaybe<FieldSelectorEnum>
  phone: InputMaybe<FieldSelectorEnum>
  social: InputMaybe<ContentYamlSocialFieldSelector>
  contacts: InputMaybe<ContentYamlContactsFieldSelector>
}

export type ContentYamlAddressFieldSelector = {
  street: InputMaybe<FieldSelectorEnum>
  postalCode: InputMaybe<FieldSelectorEnum>
  city: InputMaybe<FieldSelectorEnum>
}

export type ContentYamlSocialFieldSelector = {
  bitbucket: InputMaybe<FieldSelectorEnum>
  facebook: InputMaybe<FieldSelectorEnum>
  github: InputMaybe<FieldSelectorEnum>
  instagram: InputMaybe<FieldSelectorEnum>
  linkedin: InputMaybe<FieldSelectorEnum>
  twitter: InputMaybe<FieldSelectorEnum>
}

export type ContentYamlContactsFieldSelector = {
  role: InputMaybe<FieldSelectorEnum>
  personId: InputMaybe<FieldSelectorEnum>
}

export type FileGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<FileGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: FileFieldSelector
}

export type FileFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  absolutePath: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  mode: InputMaybe<IntQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>
  childImageSharp: InputMaybe<ImageSharpFilterInput>
  childrenContentYaml: InputMaybe<ContentYamlFilterListInput>
  childContentYaml: InputMaybe<ContentYamlFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type FileSortInput = {
  sourceInstanceName: InputMaybe<SortOrderEnum>
  absolutePath: InputMaybe<SortOrderEnum>
  relativePath: InputMaybe<SortOrderEnum>
  extension: InputMaybe<SortOrderEnum>
  size: InputMaybe<SortOrderEnum>
  prettySize: InputMaybe<SortOrderEnum>
  modifiedTime: InputMaybe<SortOrderEnum>
  accessTime: InputMaybe<SortOrderEnum>
  changeTime: InputMaybe<SortOrderEnum>
  birthTime: InputMaybe<SortOrderEnum>
  root: InputMaybe<SortOrderEnum>
  dir: InputMaybe<SortOrderEnum>
  base: InputMaybe<SortOrderEnum>
  ext: InputMaybe<SortOrderEnum>
  name: InputMaybe<SortOrderEnum>
  relativeDirectory: InputMaybe<SortOrderEnum>
  dev: InputMaybe<SortOrderEnum>
  mode: InputMaybe<SortOrderEnum>
  nlink: InputMaybe<SortOrderEnum>
  uid: InputMaybe<SortOrderEnum>
  gid: InputMaybe<SortOrderEnum>
  rdev: InputMaybe<SortOrderEnum>
  ino: InputMaybe<SortOrderEnum>
  atimeMs: InputMaybe<SortOrderEnum>
  mtimeMs: InputMaybe<SortOrderEnum>
  ctimeMs: InputMaybe<SortOrderEnum>
  atime: InputMaybe<SortOrderEnum>
  mtime: InputMaybe<SortOrderEnum>
  ctime: InputMaybe<SortOrderEnum>
  birthtime: InputMaybe<SortOrderEnum>
  birthtimeMs: InputMaybe<SortOrderEnum>
  blksize: InputMaybe<SortOrderEnum>
  blocks: InputMaybe<SortOrderEnum>
  publicURL: InputMaybe<SortOrderEnum>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkSortInput>
  childMarkdownRemark: InputMaybe<MarkdownRemarkSortInput>
  childrenImageSharp: InputMaybe<ImageSharpSortInput>
  childImageSharp: InputMaybe<ImageSharpSortInput>
  childrenContentYaml: InputMaybe<ContentYamlSortInput>
  childContentYaml: InputMaybe<ContentYamlSortInput>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SortOrderEnum = "ASC" | "DESC"

export type MarkdownRemarkSortInput = {
  id: InputMaybe<SortOrderEnum>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterSortInput>
  excerpt: InputMaybe<SortOrderEnum>
  rawMarkdownBody: InputMaybe<SortOrderEnum>
  fileAbsolutePath: InputMaybe<SortOrderEnum>
  fields: InputMaybe<MarkdownRemarkFieldsSortInput>
  html: InputMaybe<SortOrderEnum>
  htmlAst: InputMaybe<SortOrderEnum>
  excerptAst: InputMaybe<SortOrderEnum>
  headings: InputMaybe<MarkdownHeadingSortInput>
  timeToRead: InputMaybe<SortOrderEnum>
  tableOfContents: InputMaybe<SortOrderEnum>
  wordCount: InputMaybe<MarkdownWordCountSortInput>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type MarkdownRemarkFrontmatterSortInput = {
  title: InputMaybe<SortOrderEnum>
  type: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  tagLine: InputMaybe<SortOrderEnum>
  image: InputMaybe<SortOrderEnum>
  avatar: InputMaybe<SortOrderEnum>
  phone: InputMaybe<SortOrderEnum>
  email: InputMaybe<SortOrderEnum>
  social: InputMaybe<MarkdownRemarkFrontmatterSocialSortInput>
  tags: InputMaybe<SortOrderEnum>
  authors: InputMaybe<SortOrderEnum>
  index: InputMaybe<SortOrderEnum>
  href: InputMaybe<SortOrderEnum>
  alumni: InputMaybe<SortOrderEnum>
  publishDate: InputMaybe<SortOrderEnum>
  location: InputMaybe<SortOrderEnum>
  start: InputMaybe<SortOrderEnum>
  end: InputMaybe<SortOrderEnum>
  active: InputMaybe<SortOrderEnum>
  images: InputMaybe<SortOrderEnum>
  schema: InputMaybe<MarkdownRemarkFrontmatterSchemaSortInput>
  heading: InputMaybe<SortOrderEnum>
  lead: InputMaybe<SortOrderEnum>
  collageImages: InputMaybe<MarkdownRemarkFrontmatterCollageImagesSortInput>
  section1: InputMaybe<MarkdownRemarkFrontmatterSection1SortInput>
  section2: InputMaybe<MarkdownRemarkFrontmatterSection2SortInput>
  Telefon: InputMaybe<SortOrderEnum>
  content: InputMaybe<SortOrderEnum>
  section3: InputMaybe<MarkdownRemarkFrontmatterSection3SortInput>
  section4: InputMaybe<MarkdownRemarkFrontmatterSection4SortInput>
}

export type MarkdownRemarkFrontmatterSocialSortInput = {
  github: InputMaybe<SortOrderEnum>
  linkedin: InputMaybe<SortOrderEnum>
  keybase: InputMaybe<SortOrderEnum>
  twitter: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSchemaSortInput = {
  winner: InputMaybe<SortOrderEnum>
  start: InputMaybe<SortOrderEnum>
  end: InputMaybe<SortOrderEnum>
  title: InputMaybe<SortOrderEnum>
  type: InputMaybe<SortOrderEnum>
  details: InputMaybe<SortOrderEnum>
  location: InputMaybe<MarkdownRemarkFrontmatterSchemaLocationSortInput>
  presenters: InputMaybe<SortOrderEnum>
  externalpresenter: InputMaybe<MarkdownRemarkFrontmatterSchemaExternalpresenterSortInput>
  presentation: InputMaybe<SortOrderEnum>
  href: InputMaybe<SortOrderEnum>
  youtubeId: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSchemaLocationSortInput = {
  coordinates: InputMaybe<SortOrderEnum>
  title: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSchemaExternalpresenterSortInput = {
  name: InputMaybe<SortOrderEnum>
  avatarSrc: InputMaybe<SortOrderEnum>
  href: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterCollageImagesSortInput = {
  collageImage: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSection1SortInput = {
  heading: InputMaybe<SortOrderEnum>
  subheading: InputMaybe<SortOrderEnum>
  content: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSection2SortInput = {
  content: InputMaybe<SortOrderEnum>
  heading: InputMaybe<SortOrderEnum>
  subheading: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSection3SortInput = {
  heading: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFrontmatterSection4SortInput = {
  heading: InputMaybe<SortOrderEnum>
}

export type MarkdownRemarkFieldsSortInput = {
  href: InputMaybe<SortOrderEnum>
  date: InputMaybe<SortOrderEnum>
}

export type MarkdownHeadingSortInput = {
  id: InputMaybe<SortOrderEnum>
  value: InputMaybe<SortOrderEnum>
  depth: InputMaybe<SortOrderEnum>
}

export type MarkdownWordCountSortInput = {
  paragraphs: InputMaybe<SortOrderEnum>
  sentences: InputMaybe<SortOrderEnum>
  words: InputMaybe<SortOrderEnum>
}

export type NodeSortInput = {
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type InternalSortInput = {
  content: InputMaybe<SortOrderEnum>
  contentDigest: InputMaybe<SortOrderEnum>
  description: InputMaybe<SortOrderEnum>
  fieldOwners: InputMaybe<SortOrderEnum>
  ignoreType: InputMaybe<SortOrderEnum>
  mediaType: InputMaybe<SortOrderEnum>
  owner: InputMaybe<SortOrderEnum>
  type: InputMaybe<SortOrderEnum>
  contentFilePath: InputMaybe<SortOrderEnum>
}

export type ImageSharpSortInput = {
  fixed: InputMaybe<ImageSharpFixedSortInput>
  fluid: InputMaybe<ImageSharpFluidSortInput>
  gatsbyImageData: InputMaybe<SortOrderEnum>
  original: InputMaybe<ImageSharpOriginalSortInput>
  resize: InputMaybe<ImageSharpResizeSortInput>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type ImageSharpFixedSortInput = {
  base64: InputMaybe<SortOrderEnum>
  tracedSVG: InputMaybe<SortOrderEnum>
  aspectRatio: InputMaybe<SortOrderEnum>
  width: InputMaybe<SortOrderEnum>
  height: InputMaybe<SortOrderEnum>
  src: InputMaybe<SortOrderEnum>
  srcSet: InputMaybe<SortOrderEnum>
  srcWebp: InputMaybe<SortOrderEnum>
  srcSetWebp: InputMaybe<SortOrderEnum>
  originalName: InputMaybe<SortOrderEnum>
}

export type ImageSharpFluidSortInput = {
  base64: InputMaybe<SortOrderEnum>
  tracedSVG: InputMaybe<SortOrderEnum>
  aspectRatio: InputMaybe<SortOrderEnum>
  src: InputMaybe<SortOrderEnum>
  srcSet: InputMaybe<SortOrderEnum>
  srcWebp: InputMaybe<SortOrderEnum>
  srcSetWebp: InputMaybe<SortOrderEnum>
  sizes: InputMaybe<SortOrderEnum>
  originalImg: InputMaybe<SortOrderEnum>
  originalName: InputMaybe<SortOrderEnum>
  presentationWidth: InputMaybe<SortOrderEnum>
  presentationHeight: InputMaybe<SortOrderEnum>
}

export type ImageSharpOriginalSortInput = {
  width: InputMaybe<SortOrderEnum>
  height: InputMaybe<SortOrderEnum>
  src: InputMaybe<SortOrderEnum>
}

export type ImageSharpResizeSortInput = {
  src: InputMaybe<SortOrderEnum>
  tracedSVG: InputMaybe<SortOrderEnum>
  width: InputMaybe<SortOrderEnum>
  height: InputMaybe<SortOrderEnum>
  aspectRatio: InputMaybe<SortOrderEnum>
  originalName: InputMaybe<SortOrderEnum>
}

export type ContentYamlSortInput = {
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
  name: InputMaybe<SortOrderEnum>
  address: InputMaybe<ContentYamlAddressSortInput>
  coordinates: InputMaybe<SortOrderEnum>
  email: InputMaybe<SortOrderEnum>
  phone: InputMaybe<SortOrderEnum>
  social: InputMaybe<ContentYamlSocialSortInput>
  contacts: InputMaybe<ContentYamlContactsSortInput>
}

export type ContentYamlAddressSortInput = {
  street: InputMaybe<SortOrderEnum>
  postalCode: InputMaybe<SortOrderEnum>
  city: InputMaybe<SortOrderEnum>
}

export type ContentYamlSocialSortInput = {
  bitbucket: InputMaybe<SortOrderEnum>
  facebook: InputMaybe<SortOrderEnum>
  github: InputMaybe<SortOrderEnum>
  instagram: InputMaybe<SortOrderEnum>
  linkedin: InputMaybe<SortOrderEnum>
  twitter: InputMaybe<SortOrderEnum>
}

export type ContentYamlContactsSortInput = {
  role: InputMaybe<SortOrderEnum>
  personId: InputMaybe<SortOrderEnum>
}

export type DirectoryConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: DirectoryFieldSelector
}

export type DirectoryEdge = {
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export type DirectoryFieldSelector = {
  sourceInstanceName: InputMaybe<FieldSelectorEnum>
  absolutePath: InputMaybe<FieldSelectorEnum>
  relativePath: InputMaybe<FieldSelectorEnum>
  extension: InputMaybe<FieldSelectorEnum>
  size: InputMaybe<FieldSelectorEnum>
  prettySize: InputMaybe<FieldSelectorEnum>
  modifiedTime: InputMaybe<FieldSelectorEnum>
  accessTime: InputMaybe<FieldSelectorEnum>
  changeTime: InputMaybe<FieldSelectorEnum>
  birthTime: InputMaybe<FieldSelectorEnum>
  root: InputMaybe<FieldSelectorEnum>
  dir: InputMaybe<FieldSelectorEnum>
  base: InputMaybe<FieldSelectorEnum>
  ext: InputMaybe<FieldSelectorEnum>
  name: InputMaybe<FieldSelectorEnum>
  relativeDirectory: InputMaybe<FieldSelectorEnum>
  dev: InputMaybe<FieldSelectorEnum>
  mode: InputMaybe<FieldSelectorEnum>
  nlink: InputMaybe<FieldSelectorEnum>
  uid: InputMaybe<FieldSelectorEnum>
  gid: InputMaybe<FieldSelectorEnum>
  rdev: InputMaybe<FieldSelectorEnum>
  ino: InputMaybe<FieldSelectorEnum>
  atimeMs: InputMaybe<FieldSelectorEnum>
  mtimeMs: InputMaybe<FieldSelectorEnum>
  ctimeMs: InputMaybe<FieldSelectorEnum>
  atime: InputMaybe<FieldSelectorEnum>
  mtime: InputMaybe<FieldSelectorEnum>
  ctime: InputMaybe<FieldSelectorEnum>
  birthtime: InputMaybe<FieldSelectorEnum>
  birthtimeMs: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<DirectoryGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: DirectoryFieldSelector
}

export type DirectoryFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  absolutePath: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  mode: InputMaybe<IntQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type DirectorySortInput = {
  sourceInstanceName: InputMaybe<SortOrderEnum>
  absolutePath: InputMaybe<SortOrderEnum>
  relativePath: InputMaybe<SortOrderEnum>
  extension: InputMaybe<SortOrderEnum>
  size: InputMaybe<SortOrderEnum>
  prettySize: InputMaybe<SortOrderEnum>
  modifiedTime: InputMaybe<SortOrderEnum>
  accessTime: InputMaybe<SortOrderEnum>
  changeTime: InputMaybe<SortOrderEnum>
  birthTime: InputMaybe<SortOrderEnum>
  root: InputMaybe<SortOrderEnum>
  dir: InputMaybe<SortOrderEnum>
  base: InputMaybe<SortOrderEnum>
  ext: InputMaybe<SortOrderEnum>
  name: InputMaybe<SortOrderEnum>
  relativeDirectory: InputMaybe<SortOrderEnum>
  dev: InputMaybe<SortOrderEnum>
  mode: InputMaybe<SortOrderEnum>
  nlink: InputMaybe<SortOrderEnum>
  uid: InputMaybe<SortOrderEnum>
  gid: InputMaybe<SortOrderEnum>
  rdev: InputMaybe<SortOrderEnum>
  ino: InputMaybe<SortOrderEnum>
  atimeMs: InputMaybe<SortOrderEnum>
  mtimeMs: InputMaybe<SortOrderEnum>
  ctimeMs: InputMaybe<SortOrderEnum>
  atime: InputMaybe<SortOrderEnum>
  mtime: InputMaybe<SortOrderEnum>
  ctime: InputMaybe<SortOrderEnum>
  birthtime: InputMaybe<SortOrderEnum>
  birthtimeMs: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SiteSiteMetadataFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  siteUrl: InputMaybe<StringQueryOperatorInput>
  author: InputMaybe<StringQueryOperatorInput>
  rssBlogTitle: InputMaybe<StringQueryOperatorInput>
  rssBlogDescription: InputMaybe<StringQueryOperatorInput>
}

export type SiteFlagsFilterInput = {
  DEV_SSR: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteFieldSelector
}

export type SiteEdge = {
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export type SiteFieldSelector = {
  buildTime: InputMaybe<FieldSelectorEnum>
  siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>
  port: InputMaybe<FieldSelectorEnum>
  host: InputMaybe<FieldSelectorEnum>
  flags: InputMaybe<SiteFlagsFieldSelector>
  polyfill: InputMaybe<FieldSelectorEnum>
  pathPrefix: InputMaybe<FieldSelectorEnum>
  jsxRuntime: InputMaybe<FieldSelectorEnum>
  trailingSlash: InputMaybe<FieldSelectorEnum>
  graphqlTypegen: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type SiteSiteMetadataFieldSelector = {
  title: InputMaybe<FieldSelectorEnum>
  description: InputMaybe<FieldSelectorEnum>
  siteUrl: InputMaybe<FieldSelectorEnum>
  author: InputMaybe<FieldSelectorEnum>
  rssBlogTitle: InputMaybe<FieldSelectorEnum>
  rssBlogDescription: InputMaybe<FieldSelectorEnum>
}

export type SiteFlagsFieldSelector = {
  DEV_SSR: InputMaybe<FieldSelectorEnum>
}

export type SiteGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteFieldSelector
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  port: InputMaybe<IntQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type SiteSortInput = {
  buildTime: InputMaybe<SortOrderEnum>
  siteMetadata: InputMaybe<SiteSiteMetadataSortInput>
  port: InputMaybe<SortOrderEnum>
  host: InputMaybe<SortOrderEnum>
  flags: InputMaybe<SiteFlagsSortInput>
  polyfill: InputMaybe<SortOrderEnum>
  pathPrefix: InputMaybe<SortOrderEnum>
  jsxRuntime: InputMaybe<SortOrderEnum>
  trailingSlash: InputMaybe<SortOrderEnum>
  graphqlTypegen: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SiteSiteMetadataSortInput = {
  title: InputMaybe<SortOrderEnum>
  description: InputMaybe<SortOrderEnum>
  siteUrl: InputMaybe<SortOrderEnum>
  author: InputMaybe<SortOrderEnum>
  rssBlogTitle: InputMaybe<SortOrderEnum>
  rssBlogDescription: InputMaybe<SortOrderEnum>
}

export type SiteFlagsSortInput = {
  DEV_SSR: InputMaybe<SortOrderEnum>
}

export type SiteFunctionConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteFunctionFieldSelector
}

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>
  node: SiteFunction
  previous: Maybe<SiteFunction>
}

export type SiteFunctionFieldSelector = {
  functionRoute: InputMaybe<FieldSelectorEnum>
  pluginName: InputMaybe<FieldSelectorEnum>
  originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>
  originalRelativeFilePath: InputMaybe<FieldSelectorEnum>
  relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>
  absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>
  matchPath: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type SiteFunctionGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteFunctionGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteFunctionFieldSelector
}

export type SiteFunctionFilterInput = {
  functionRoute: InputMaybe<StringQueryOperatorInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type SiteFunctionSortInput = {
  functionRoute: InputMaybe<SortOrderEnum>
  pluginName: InputMaybe<SortOrderEnum>
  originalAbsoluteFilePath: InputMaybe<SortOrderEnum>
  originalRelativeFilePath: InputMaybe<SortOrderEnum>
  relativeCompiledFilePath: InputMaybe<SortOrderEnum>
  absoluteCompiledFilePath: InputMaybe<SortOrderEnum>
  matchPath: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SitePluginFilterInput = {
  resolve: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type SitePageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SitePageFieldSelector
}

export type SitePageEdge = {
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export type SitePageFieldSelector = {
  path: InputMaybe<FieldSelectorEnum>
  component: InputMaybe<FieldSelectorEnum>
  internalComponentName: InputMaybe<FieldSelectorEnum>
  componentChunkName: InputMaybe<FieldSelectorEnum>
  matchPath: InputMaybe<FieldSelectorEnum>
  pageContext: InputMaybe<FieldSelectorEnum>
  pluginCreator: InputMaybe<SitePluginFieldSelector>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type SitePluginFieldSelector = {
  resolve: InputMaybe<FieldSelectorEnum>
  name: InputMaybe<FieldSelectorEnum>
  version: InputMaybe<FieldSelectorEnum>
  nodeAPIs: InputMaybe<FieldSelectorEnum>
  browserAPIs: InputMaybe<FieldSelectorEnum>
  ssrAPIs: InputMaybe<FieldSelectorEnum>
  pluginFilepath: InputMaybe<FieldSelectorEnum>
  pluginOptions: InputMaybe<FieldSelectorEnum>
  packageJson: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SitePageGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SitePageFieldSelector
}

export type SitePageFilterInput = {
  path: InputMaybe<StringQueryOperatorInput>
  component: InputMaybe<StringQueryOperatorInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type SitePageSortInput = {
  path: InputMaybe<SortOrderEnum>
  component: InputMaybe<SortOrderEnum>
  internalComponentName: InputMaybe<SortOrderEnum>
  componentChunkName: InputMaybe<SortOrderEnum>
  matchPath: InputMaybe<SortOrderEnum>
  pageContext: InputMaybe<SortOrderEnum>
  pluginCreator: InputMaybe<SitePluginSortInput>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SitePluginSortInput = {
  resolve: InputMaybe<SortOrderEnum>
  name: InputMaybe<SortOrderEnum>
  version: InputMaybe<SortOrderEnum>
  nodeAPIs: InputMaybe<SortOrderEnum>
  browserAPIs: InputMaybe<SortOrderEnum>
  ssrAPIs: InputMaybe<SortOrderEnum>
  pluginFilepath: InputMaybe<SortOrderEnum>
  pluginOptions: InputMaybe<SortOrderEnum>
  packageJson: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type SitePluginConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SitePluginFieldSelector
}

export type SitePluginEdge = {
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SitePluginGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SitePluginFieldSelector
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldSelector = {
  buildTime: InputMaybe<FieldSelectorEnum>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<SiteBuildMetadataGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type SiteBuildMetadataSortInput = {
  buildTime: InputMaybe<SortOrderEnum>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type MarkdownRemarkConnection = {
  totalCount: Scalars["Int"]
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous: Maybe<MarkdownRemark>
}

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<MarkdownRemarkGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: MarkdownRemarkFieldSelector
}

export type ImageSharpConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: ImageSharpFieldSelector
}

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>
  node: ImageSharp
  previous: Maybe<ImageSharp>
}

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<ImageSharpGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: ImageSharpFieldSelector
}

export type TeamtailorJobFieldsFilterInput = {
  href: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobAttributesFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>
  body: InputMaybe<StringQueryOperatorInput>
  apply_button_text: InputMaybe<StringQueryOperatorInput>
  human_status: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<BooleanQueryOperatorInput>
  picture: InputMaybe<TeamtailorJobAttributesPictureFilterInput>
  pinned: InputMaybe<BooleanQueryOperatorInput>
  status: InputMaybe<StringQueryOperatorInput>
  external_application_url: InputMaybe<StringQueryOperatorInput>
  name_requirement: InputMaybe<StringQueryOperatorInput>
  resume_requirement: InputMaybe<StringQueryOperatorInput>
  cover_letter_requirement: InputMaybe<StringQueryOperatorInput>
  phone_requirement: InputMaybe<StringQueryOperatorInput>
  created_at: InputMaybe<DateQueryOperatorInput>
}

export type TeamtailorJobAttributesPictureFilterInput = {
  standard: InputMaybe<StringQueryOperatorInput>
  thumb: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobLinksFilterInput = {
  careersite_job_apply_url: InputMaybe<StringQueryOperatorInput>
  careersite_job_url: InputMaybe<StringQueryOperatorInput>
  careersite_job_apply_iframe_url: InputMaybe<StringQueryOperatorInput>
  self: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsFilterInput = {
  department: InputMaybe<TeamtailorJobRelationshipsDepartmentFilterInput>
  role: InputMaybe<TeamtailorJobRelationshipsRoleFilterInput>
  location: InputMaybe<TeamtailorJobRelationshipsLocationFilterInput>
  user: InputMaybe<TeamtailorJobRelationshipsUserFilterInput>
  questions: InputMaybe<TeamtailorJobRelationshipsQuestionsFilterInput>
  candidates: InputMaybe<TeamtailorJobRelationshipsCandidatesFilterInput>
  stages: InputMaybe<TeamtailorJobRelationshipsStagesFilterInput>
  colleagues: InputMaybe<TeamtailorJobRelationshipsColleaguesFilterInput>
  team_memberships: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsFilterInput>
  picked_questions: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsFilterInput>
}

export type TeamtailorJobRelationshipsDepartmentFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsDepartmentLinksFilterInput>
}

export type TeamtailorJobRelationshipsDepartmentLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsRoleFilterInput = {
  data: InputMaybe<TeamtailorJobRelationshipsRoleDataFilterInput>
}

export type TeamtailorJobRelationshipsRoleDataFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataLinksFilterInput>
  attributes: InputMaybe<TeamtailorJobRelationshipsRoleDataAttributesFilterInput>
  relationships: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsFilterInput>
}

export type TeamtailorJobRelationshipsRoleDataLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsRoleDataAttributesFilterInput = {
  name: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsFilterInput = {
  department: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFilterInput>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFilterInput>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsLocationFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsLocationLinksFilterInput>
}

export type TeamtailorJobRelationshipsLocationLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsUserFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsUserLinksFilterInput>
}

export type TeamtailorJobRelationshipsUserLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsQuestionsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsQuestionsLinksFilterInput>
}

export type TeamtailorJobRelationshipsQuestionsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsCandidatesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsCandidatesLinksFilterInput>
}

export type TeamtailorJobRelationshipsCandidatesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsStagesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsStagesLinksFilterInput>
}

export type TeamtailorJobRelationshipsStagesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsColleaguesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsColleaguesLinksFilterInput>
}

export type TeamtailorJobRelationshipsColleaguesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsTeam_MembershipsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsLinksFilterInput>
}

export type TeamtailorJobRelationshipsTeam_MembershipsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobRelationshipsPicked_QuestionsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsLinksFilterInput>
}

export type TeamtailorJobRelationshipsPicked_QuestionsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>
  related: InputMaybe<StringQueryOperatorInput>
}

export type TeamtailorJobConnection = {
  totalCount: Scalars["Int"]
  edges: Array<TeamtailorJobEdge>
  nodes: Array<TeamtailorJob>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<TeamtailorJobGroupConnection>
}

export type TeamtailorJobConnectionDistinctArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobConnectionMaxArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobConnectionMinArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobConnectionSumArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobEdge = {
  next: Maybe<TeamtailorJob>
  node: TeamtailorJob
  previous: Maybe<TeamtailorJob>
}

export type TeamtailorJobFieldSelector = {
  fields: InputMaybe<TeamtailorJobFieldsFieldSelector>
  attributes: InputMaybe<TeamtailorJobAttributesFieldSelector>
  links: InputMaybe<TeamtailorJobLinksFieldSelector>
  type: InputMaybe<FieldSelectorEnum>
  relationships: InputMaybe<TeamtailorJobRelationshipsFieldSelector>
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
}

export type TeamtailorJobFieldsFieldSelector = {
  href: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobAttributesFieldSelector = {
  title: InputMaybe<FieldSelectorEnum>
  body: InputMaybe<FieldSelectorEnum>
  apply_button_text: InputMaybe<FieldSelectorEnum>
  human_status: InputMaybe<FieldSelectorEnum>
  internal: InputMaybe<FieldSelectorEnum>
  picture: InputMaybe<TeamtailorJobAttributesPictureFieldSelector>
  pinned: InputMaybe<FieldSelectorEnum>
  status: InputMaybe<FieldSelectorEnum>
  external_application_url: InputMaybe<FieldSelectorEnum>
  name_requirement: InputMaybe<FieldSelectorEnum>
  resume_requirement: InputMaybe<FieldSelectorEnum>
  cover_letter_requirement: InputMaybe<FieldSelectorEnum>
  phone_requirement: InputMaybe<FieldSelectorEnum>
  created_at: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobAttributesPictureFieldSelector = {
  standard: InputMaybe<FieldSelectorEnum>
  thumb: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobLinksFieldSelector = {
  careersite_job_apply_url: InputMaybe<FieldSelectorEnum>
  careersite_job_url: InputMaybe<FieldSelectorEnum>
  careersite_job_apply_iframe_url: InputMaybe<FieldSelectorEnum>
  self: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsFieldSelector = {
  department: InputMaybe<TeamtailorJobRelationshipsDepartmentFieldSelector>
  role: InputMaybe<TeamtailorJobRelationshipsRoleFieldSelector>
  location: InputMaybe<TeamtailorJobRelationshipsLocationFieldSelector>
  user: InputMaybe<TeamtailorJobRelationshipsUserFieldSelector>
  questions: InputMaybe<TeamtailorJobRelationshipsQuestionsFieldSelector>
  candidates: InputMaybe<TeamtailorJobRelationshipsCandidatesFieldSelector>
  stages: InputMaybe<TeamtailorJobRelationshipsStagesFieldSelector>
  colleagues: InputMaybe<TeamtailorJobRelationshipsColleaguesFieldSelector>
  team_memberships: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsFieldSelector>
  picked_questions: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsFieldSelector>
}

export type TeamtailorJobRelationshipsDepartmentFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsDepartmentLinksFieldSelector>
}

export type TeamtailorJobRelationshipsDepartmentLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsRoleFieldSelector = {
  data: InputMaybe<TeamtailorJobRelationshipsRoleDataFieldSelector>
}

export type TeamtailorJobRelationshipsRoleDataFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  type: InputMaybe<FieldSelectorEnum>
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataLinksFieldSelector>
  attributes: InputMaybe<TeamtailorJobRelationshipsRoleDataAttributesFieldSelector>
  relationships: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsFieldSelector>
}

export type TeamtailorJobRelationshipsRoleDataLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsRoleDataAttributesFieldSelector = {
  name: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsFieldSelector = {
  department: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFieldSelector>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFieldSelector>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsLocationFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsLocationLinksFieldSelector>
}

export type TeamtailorJobRelationshipsLocationLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsUserFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsUserLinksFieldSelector>
}

export type TeamtailorJobRelationshipsUserLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsQuestionsFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsQuestionsLinksFieldSelector>
}

export type TeamtailorJobRelationshipsQuestionsLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsCandidatesFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsCandidatesLinksFieldSelector>
}

export type TeamtailorJobRelationshipsCandidatesLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsStagesFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsStagesLinksFieldSelector>
}

export type TeamtailorJobRelationshipsStagesLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsColleaguesFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsColleaguesLinksFieldSelector>
}

export type TeamtailorJobRelationshipsColleaguesLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsTeam_MembershipsFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsLinksFieldSelector>
}

export type TeamtailorJobRelationshipsTeam_MembershipsLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobRelationshipsPicked_QuestionsFieldSelector = {
  links: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsLinksFieldSelector>
}

export type TeamtailorJobRelationshipsPicked_QuestionsLinksFieldSelector = {
  self: InputMaybe<FieldSelectorEnum>
  related: InputMaybe<FieldSelectorEnum>
}

export type TeamtailorJobGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<TeamtailorJobEdge>
  nodes: Array<TeamtailorJob>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<TeamtailorJobGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type TeamtailorJobGroupConnectionDistinctArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobGroupConnectionMaxArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobGroupConnectionMinArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobGroupConnectionSumArgs = {
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: TeamtailorJobFieldSelector
}

export type TeamtailorJobFilterInput = {
  fields: InputMaybe<TeamtailorJobFieldsFilterInput>
  attributes: InputMaybe<TeamtailorJobAttributesFilterInput>
  links: InputMaybe<TeamtailorJobLinksFilterInput>
  type: InputMaybe<StringQueryOperatorInput>
  relationships: InputMaybe<TeamtailorJobRelationshipsFilterInput>
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
}

export type TeamtailorJobSortInput = {
  fields: InputMaybe<TeamtailorJobFieldsSortInput>
  attributes: InputMaybe<TeamtailorJobAttributesSortInput>
  links: InputMaybe<TeamtailorJobLinksSortInput>
  type: InputMaybe<SortOrderEnum>
  relationships: InputMaybe<TeamtailorJobRelationshipsSortInput>
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
}

export type TeamtailorJobFieldsSortInput = {
  href: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobAttributesSortInput = {
  title: InputMaybe<SortOrderEnum>
  body: InputMaybe<SortOrderEnum>
  apply_button_text: InputMaybe<SortOrderEnum>
  human_status: InputMaybe<SortOrderEnum>
  internal: InputMaybe<SortOrderEnum>
  picture: InputMaybe<TeamtailorJobAttributesPictureSortInput>
  pinned: InputMaybe<SortOrderEnum>
  status: InputMaybe<SortOrderEnum>
  external_application_url: InputMaybe<SortOrderEnum>
  name_requirement: InputMaybe<SortOrderEnum>
  resume_requirement: InputMaybe<SortOrderEnum>
  cover_letter_requirement: InputMaybe<SortOrderEnum>
  phone_requirement: InputMaybe<SortOrderEnum>
  created_at: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobAttributesPictureSortInput = {
  standard: InputMaybe<SortOrderEnum>
  thumb: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobLinksSortInput = {
  careersite_job_apply_url: InputMaybe<SortOrderEnum>
  careersite_job_url: InputMaybe<SortOrderEnum>
  careersite_job_apply_iframe_url: InputMaybe<SortOrderEnum>
  self: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsSortInput = {
  department: InputMaybe<TeamtailorJobRelationshipsDepartmentSortInput>
  role: InputMaybe<TeamtailorJobRelationshipsRoleSortInput>
  location: InputMaybe<TeamtailorJobRelationshipsLocationSortInput>
  user: InputMaybe<TeamtailorJobRelationshipsUserSortInput>
  questions: InputMaybe<TeamtailorJobRelationshipsQuestionsSortInput>
  candidates: InputMaybe<TeamtailorJobRelationshipsCandidatesSortInput>
  stages: InputMaybe<TeamtailorJobRelationshipsStagesSortInput>
  colleagues: InputMaybe<TeamtailorJobRelationshipsColleaguesSortInput>
  team_memberships: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsSortInput>
  picked_questions: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsSortInput>
}

export type TeamtailorJobRelationshipsDepartmentSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsDepartmentLinksSortInput>
}

export type TeamtailorJobRelationshipsDepartmentLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsRoleSortInput = {
  data: InputMaybe<TeamtailorJobRelationshipsRoleDataSortInput>
}

export type TeamtailorJobRelationshipsRoleDataSortInput = {
  id: InputMaybe<SortOrderEnum>
  type: InputMaybe<SortOrderEnum>
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataLinksSortInput>
  attributes: InputMaybe<TeamtailorJobRelationshipsRoleDataAttributesSortInput>
  relationships: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsSortInput>
}

export type TeamtailorJobRelationshipsRoleDataLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsRoleDataAttributesSortInput = {
  name: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsSortInput = {
  department: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentSortInput>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksSortInput>
}

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsLocationSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsLocationLinksSortInput>
}

export type TeamtailorJobRelationshipsLocationLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsUserSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsUserLinksSortInput>
}

export type TeamtailorJobRelationshipsUserLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsQuestionsSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsQuestionsLinksSortInput>
}

export type TeamtailorJobRelationshipsQuestionsLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsCandidatesSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsCandidatesLinksSortInput>
}

export type TeamtailorJobRelationshipsCandidatesLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsStagesSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsStagesLinksSortInput>
}

export type TeamtailorJobRelationshipsStagesLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsColleaguesSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsColleaguesLinksSortInput>
}

export type TeamtailorJobRelationshipsColleaguesLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsTeam_MembershipsSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsLinksSortInput>
}

export type TeamtailorJobRelationshipsTeam_MembershipsLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type TeamtailorJobRelationshipsPicked_QuestionsSortInput = {
  links: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsLinksSortInput>
}

export type TeamtailorJobRelationshipsPicked_QuestionsLinksSortInput = {
  self: InputMaybe<SortOrderEnum>
  related: InputMaybe<SortOrderEnum>
}

export type O365UserConnection = {
  totalCount: Scalars["Int"]
  edges: Array<O365UserEdge>
  nodes: Array<O365User>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<O365UserGroupConnection>
}

export type O365UserConnectionDistinctArgs = {
  field: O365UserFieldSelector
}

export type O365UserConnectionMaxArgs = {
  field: O365UserFieldSelector
}

export type O365UserConnectionMinArgs = {
  field: O365UserFieldSelector
}

export type O365UserConnectionSumArgs = {
  field: O365UserFieldSelector
}

export type O365UserConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: O365UserFieldSelector
}

export type O365UserEdge = {
  next: Maybe<O365User>
  node: O365User
  previous: Maybe<O365User>
}

export type O365UserFieldSelector = {
  id: InputMaybe<FieldSelectorEnum>
  parent: InputMaybe<NodeFieldSelector>
  children: InputMaybe<NodeFieldSelector>
  internal: InputMaybe<InternalFieldSelector>
  businessPhones: InputMaybe<FieldSelectorEnum>
  displayName: InputMaybe<FieldSelectorEnum>
  givenName: InputMaybe<FieldSelectorEnum>
  mail: InputMaybe<FieldSelectorEnum>
  mobilePhone: InputMaybe<FieldSelectorEnum>
  officeLocation: InputMaybe<FieldSelectorEnum>
  preferredLanguage: InputMaybe<FieldSelectorEnum>
  surname: InputMaybe<FieldSelectorEnum>
  userPrincipalName: InputMaybe<FieldSelectorEnum>
}

export type O365UserGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<O365UserEdge>
  nodes: Array<O365User>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<O365UserGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type O365UserGroupConnectionDistinctArgs = {
  field: O365UserFieldSelector
}

export type O365UserGroupConnectionMaxArgs = {
  field: O365UserFieldSelector
}

export type O365UserGroupConnectionMinArgs = {
  field: O365UserFieldSelector
}

export type O365UserGroupConnectionSumArgs = {
  field: O365UserFieldSelector
}

export type O365UserGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: O365UserFieldSelector
}

export type O365UserFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  internal: InputMaybe<InternalFilterInput>
  businessPhones: InputMaybe<StringQueryOperatorInput>
  displayName: InputMaybe<StringQueryOperatorInput>
  givenName: InputMaybe<StringQueryOperatorInput>
  mail: InputMaybe<StringQueryOperatorInput>
  mobilePhone: InputMaybe<StringQueryOperatorInput>
  officeLocation: InputMaybe<StringQueryOperatorInput>
  preferredLanguage: InputMaybe<StringQueryOperatorInput>
  surname: InputMaybe<StringQueryOperatorInput>
  userPrincipalName: InputMaybe<StringQueryOperatorInput>
}

export type O365UserSortInput = {
  id: InputMaybe<SortOrderEnum>
  parent: InputMaybe<NodeSortInput>
  children: InputMaybe<NodeSortInput>
  internal: InputMaybe<InternalSortInput>
  businessPhones: InputMaybe<SortOrderEnum>
  displayName: InputMaybe<SortOrderEnum>
  givenName: InputMaybe<SortOrderEnum>
  mail: InputMaybe<SortOrderEnum>
  mobilePhone: InputMaybe<SortOrderEnum>
  officeLocation: InputMaybe<SortOrderEnum>
  preferredLanguage: InputMaybe<SortOrderEnum>
  surname: InputMaybe<SortOrderEnum>
  userPrincipalName: InputMaybe<SortOrderEnum>
}

export type ContentYamlConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentYamlEdge>
  nodes: Array<ContentYaml>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<ContentYamlGroupConnection>
}

export type ContentYamlConnectionDistinctArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlConnectionMaxArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlConnectionMinArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlConnectionSumArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: ContentYamlFieldSelector
}

export type ContentYamlEdge = {
  next: Maybe<ContentYaml>
  node: ContentYaml
  previous: Maybe<ContentYaml>
}

export type ContentYamlGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentYamlEdge>
  nodes: Array<ContentYaml>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  sum: Maybe<Scalars["Float"]>
  group: Array<ContentYamlGroupConnection>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
}

export type ContentYamlGroupConnectionDistinctArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlGroupConnectionMaxArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlGroupConnectionMinArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlGroupConnectionSumArgs = {
  field: ContentYamlFieldSelector
}

export type ContentYamlGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars["Int"]>
  limit: InputMaybe<Scalars["Int"]>
  field: ContentYamlFieldSelector
}

export type PersonsQueryQueryVariables = Exact<{ [key: string]: never }>

export type PersonsQueryQuery = {
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  images: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type SeoMetaDataQueryVariables = Exact<{ [key: string]: never }>

export type SeoMetaDataQuery = {
  site: { siteMetadata: { title: string; description: string; siteUrl: string } }
}

export type KitsInfoQueryQueryVariables = Exact<{ [key: string]: never }>

export type KitsInfoQueryQuery = {
  kits: {
    edges: Array<{
      node: {
        name: string
        phone: string
        email: string
        address: { street: string; postalCode: string; city: string }
        social: { facebook: string; github: string; linkedin: string; twitter: string }
      }
    }>
  }
}

export type IndexQueryQueryVariables = Exact<{ [key: string]: never }>

export type IndexQueryQuery = {
  page: {
    edges: Array<{ node: { frontmatter: { title: string; heading: string; lead: string } } }>
  }
  blog: {
    edges: Array<{
      node: {
        html: string
        fields: { href: string; date: any }
        frontmatter: { authors: Array<string>; title: string }
      }
    }>
  }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  avatars: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type CyberAcademyPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type CyberAcademyPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        html: string
        frontmatter: {
          title: string
          heading: string
          lead: string
          content: string
          images: Array<string>
          section1: { heading: string }
          section2: { heading: string; content: string }
        }
      }
    }>
  }
  projects: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { index: number; title: string; image: string; href: string }
      }
    }>
  }
  pageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  projectImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type OfferPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type OfferPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string
          heading: string
          lead: string
          section1: { heading: string }
          section2: { heading: string; content: string }
        }
      }
    }>
  }
  offers: { edges: Array<{ node: { html: string; frontmatter: { id: string; title: string } } }> }
  projects: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { index: number; title: string; image: string; href: string }
      }
    }>
  }
  images: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type IndexPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string
          heading: string
          lead: string
          images: Array<string>
          section1: { subheading: string; heading: string; content: string }
          section2: { subheading: string; heading: string; content: string }
          section3: { heading: string }
          section4: { heading: string }
        }
      }
    }>
  }
  news: {
    edges: Array<{
      node: {
        html: string
        fields: { href: string; date: any }
        frontmatter: { authors: Array<string>; title: string; heading: string; image: string }
      }
    }>
  }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  blog: {
    edges: Array<{
      node: {
        html: string
        fields: { href: string; date: any }
        frontmatter: { authors: Array<string>; title: string }
      }
    }>
  }
  avatars: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  images: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  imagesSmall: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  collageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type JobPageQueryQueryVariables = Exact<{
  href?: InputMaybe<Scalars["String"]>
}>

export type JobPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string
          heading: string
          lead: string
          images: Array<string>
          section1: { heading: string }
          section2: { content: string; heading: string }
        }
      }
    }>
  }
  activeJob: { id: string }
  jobs: {
    edges: Array<{
      node: {
        id: string
        fields: { href: string }
        links: { careersite_job_apply_url: string; careersite_job_url: string }
        attributes: { title: string; body: string; apply_button_text: string; human_status: string }
      }
    }>
  }
  benefits: {
    edges: Array<{ node: { html: string; frontmatter: { title: string; image: string } } }>
  }
  images: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  collageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  personaImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  cyberAcademyImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type SecurityPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type SecurityPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string
          heading: string
          lead: string
          images: Array<string>
          section1: { heading: string }
          section2: { heading: string; content: string }
        }
      }
    }>
  }
  projects: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { index: number; title: string; image: string; href: string }
      }
    }>
  }
  pageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  projectImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type OtSecurityPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type OtSecurityPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        html: string
        frontmatter: {
          title: string
          heading: string
          lead: string
          images: Array<string>
          section1: { heading: string }
          section2: { heading: string; content: string }
        }
      }
    }>
  }
  projects: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { index: number; title: string; image: string; href: string }
      }
    }>
  }
  pageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  projectImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type KonferensInfoQueryQueryVariables = Exact<{
  href?: InputMaybe<Scalars["String"]>
}>

export type KonferensInfoQueryQuery = {
  page: {
    edges: Array<{
      node: {
        frontmatter: { title: string; heading: string; lead: string; section1: { heading: string } }
      }
    }>
  }
  activeKitscon: {
    html: string
    frontmatter: {
      title: string
      tagLine: string
      location: string
      start: any
      end: any
      image: string
      collageImages: Array<{ collageImage: string }>
      schema: Array<{
        start: any
        end: string
        href: string
        title: string
        details: string
        presenters: Array<string>
        presentation: string
        type: string
        youtubeId: string
        externalpresenter: { name: string; href: string; avatarSrc: string }
        location: { coordinates: Array<number>; title: string }
      }>
    }
  }
  latestKitscon: {
    edges: Array<{
      node: {
        html: string
        fields: { href: string }
        frontmatter: {
          title: string
          tagLine: string
          location: string
          start: any
          end: any
          image: string
          collageImages: Array<{ collageImage: string }>
          schema: Array<{
            start: any
            end: string
            href: string
            title: string
            details: string
            presenters: Array<string>
            presentation: string
            type: string
            youtubeId: string
            externalpresenter: { name: string; href: string; avatarSrc: string }
            location: { coordinates: Array<number>; title: string }
          }>
        }
      }
    }>
  }
  kitscons: { edges: Array<{ node: { fields: { href: string }; frontmatter: { start: any } } }> }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  avatars: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  collageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type KitsStudioPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type KitsStudioPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        html: string
        frontmatter: {
          title: string
          heading: string
          lead: string
          images: Array<string>
          section1: { heading: string }
          section2: { heading: string; content: string }
        }
      }
    }>
  }
  projects: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { index: number; title: string; image: string; href: string }
      }
    }>
  }
  pageImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
  projectImages: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type ContactPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type ContactPageQueryQuery = {
  metadata: {
    edges: Array<{
      node: { name: string; coordinates: Array<number>; address: { street: string } }
    }>
  }
}

export type AboutPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type AboutPageQueryQuery = {
  page: {
    edges: Array<{
      node: {
        html: string
        frontmatter: { title: string; heading: string; lead: string; section1: { heading: string } }
      }
    }>
  }
  metadata: {
    edges: Array<{
      node: {
        name: string
        coordinates: Array<number>
        address: { street: string }
        contacts: Array<{ role: string; personId: string }>
      }
    }>
  }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
}

export type NewsQueryQueryVariables = Exact<{
  href: Scalars["String"]
}>

export type NewsQueryQuery = {
  page: {
    edges: Array<{ node: { frontmatter: { title: string; heading: string; lead: string } } }>
  }
  news: {
    html: string
    fields: { date: any; href: string }
    frontmatter: { authors: Array<string>; title: string }
  }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  avatars: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type BlogPostQueryQueryVariables = Exact<{
  href: Scalars["String"]
}>

export type BlogPostQueryQuery = {
  page: {
    edges: Array<{ node: { frontmatter: { title: string; heading: string; lead: string } } }>
  }
  post: {
    html: string
    fields: { date: any; href: string }
    frontmatter: { authors: Array<string>; title: string }
  }
  persons: {
    edges: Array<{
      node: {
        fields: { href: string }
        frontmatter: {
          id: string
          title: string
          tagLine: string
          alumni: boolean
          image: string
          avatar: string
          phone: string
          email: string
          tags: Array<string>
          social: { github: string; linkedin: string; keybase: string; twitter: string }
        }
      }
    }>
  }
  avatars: {
    edges: Array<{ node: { relativePath: string; childImageSharp: { gatsbyImageData: any } } }>
  }
}

export type BlogFragmentFragment = {
  node: {
    html: string
    fields: { href: string; date: any }
    frontmatter: { authors: Array<string>; title: string }
  }
}

export type ImageFragmentCollageFragment = {
  relativePath: string
  childImageSharp: { gatsbyImageData: any }
}

export type ImageFragmentPersonaFragment = {
  relativePath: string
  childImageSharp: { gatsbyImageData: any }
}

export type ImageFragmentFragment = {
  relativePath: string
  childImageSharp: { gatsbyImageData: any }
}

export type ImageFragmentAvatarFragment = {
  relativePath: string
  childImageSharp: { gatsbyImageData: any }
}

export type ImageFragmentSmallFragment = {
  relativePath: string
  childImageSharp: { gatsbyImageData: any }
}

export type PersonFragmentFragment = {
  fields: { href: string }
  frontmatter: {
    id: string
    title: string
    tagLine: string
    alumni: boolean
    image: string
    avatar: string
    phone: string
    email: string
    tags: Array<string>
    social: { github: string; linkedin: string; keybase: string; twitter: string }
  }
}

export type GatsbyImageSharpFixedFragment = {
  base64: string
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG: string
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64: string
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG: string
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

export type GatsbyImageSharpFluidFragment = {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: number
  maxWidth: number
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}
