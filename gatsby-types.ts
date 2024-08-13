export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type ContentYaml */
  childrenContentYaml: Maybe<Array<Maybe<ContentYaml>>>;
  /** Returns the first child node of type ContentYaml or null if there are no children of given type on this node */
  childContentYaml: Maybe<ContentYaml>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  jsxRuntime: Maybe<Scalars['String']>;
  trailingSlash: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  rssBlogTitle: Maybe<Scalars['String']>;
  rssBlogDescription: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  pluginCreator: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  packageJson: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type MarkdownHeading = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  fields: Maybe<MarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  heading: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  tagLine: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  social: Maybe<MarkdownRemarkFrontmatterSocial>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  authors: Maybe<Array<Maybe<Scalars['String']>>>;
  index: Maybe<Scalars['Int']>;
  href: Maybe<Scalars['String']>;
  alumni: Maybe<Scalars['Boolean']>;
  publishDate: Maybe<Scalars['Date']>;
  location: Maybe<Scalars['String']>;
  start: Maybe<Scalars['Date']>;
  end: Maybe<Scalars['Date']>;
  active: Maybe<Scalars['Boolean']>;
  images: Maybe<Array<Maybe<Scalars['String']>>>;
  schema: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSchema>>>;
  heading: Maybe<Scalars['String']>;
  lead: Maybe<Scalars['String']>;
  collageImages: Maybe<Array<Maybe<MarkdownRemarkFrontmatterCollageImages>>>;
  section1: Maybe<MarkdownRemarkFrontmatterSection1>;
  section2: Maybe<MarkdownRemarkFrontmatterSection2>;
  Telefon: Maybe<Scalars['String']>;
  section3: Maybe<MarkdownRemarkFrontmatterSection3>;
  section4: Maybe<MarkdownRemarkFrontmatterSection4>;
};


export type MarkdownRemarkFrontmatterPublishDateArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterStartArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterEndArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSocial = {
  github: Maybe<Scalars['String']>;
  linkedin: Maybe<Scalars['String']>;
  keybase: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSchema = {
  winner: Maybe<Scalars['Boolean']>;
  start: Maybe<Scalars['Date']>;
  end: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  details: Maybe<Scalars['String']>;
  location: Maybe<MarkdownRemarkFrontmatterSchemaLocation>;
  presenters: Maybe<Array<Maybe<Scalars['String']>>>;
  externalpresenter: Maybe<MarkdownRemarkFrontmatterSchemaExternalpresenter>;
  presentation: Maybe<Scalars['String']>;
  href: Maybe<Scalars['String']>;
  youtubeId: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterSchemaStartArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSchemaLocation = {
  coordinates: Maybe<Array<Maybe<Scalars['Float']>>>;
  title: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSchemaExternalpresenter = {
  name: Maybe<Scalars['String']>;
  avatarSrc: Maybe<Scalars['String']>;
  href: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterCollageImages = {
  collageImage: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSection1 = {
  heading: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  subheading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSection2 = {
  content: Maybe<Scalars['String']>;
  heading: Maybe<Scalars['String']>;
  subheading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSection3 = {
  heading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSection4 = {
  heading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFields = {
  href: Maybe<Scalars['String']>;
  date: Maybe<Scalars['Date']>;
};


export type MarkdownRemarkFieldsDateArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
  turdSize: InputMaybe<Scalars['Float']>;
  alphaMax: InputMaybe<Scalars['Float']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  background: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  base64Width: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  traceSVG: InputMaybe<Potrace>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  base64Width: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone: InputMaybe<DuotoneGradient>;
  traceSVG: InputMaybe<Potrace>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  aspectRatio: InputMaybe<Scalars['Float']>;
  placeholder: InputMaybe<ImagePlaceholder>;
  blurredOptions: InputMaybe<BlurredOptions>;
  tracedSVGOptions: InputMaybe<Potrace>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes: InputMaybe<Scalars['String']>;
  quality: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  pngOptions: InputMaybe<PngOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  avifOptions: InputMaybe<AvifOptions>;
  transformOptions: InputMaybe<TransformOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality: InputMaybe<Scalars['Int']>;
  progressive: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality: InputMaybe<Scalars['Int']>;
  compressionSpeed: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality: InputMaybe<Scalars['Int']>;
  lossless: InputMaybe<Scalars['Boolean']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ImageCropFocus>;
  fit: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type TeamtailorJob = Node & {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type: Maybe<Scalars['String']>;
  links: Maybe<TeamtailorJobLinks>;
  attributes: Maybe<TeamtailorJobAttributes>;
  relationships: Maybe<TeamtailorJobRelationships>;
  fields: Maybe<TeamtailorJobFields>;
};

export type TeamtailorJobLinks = {
  careersite_job_url: Maybe<Scalars['String']>;
  careersite_job_apply_url: Maybe<Scalars['String']>;
  careersite_job_apply_iframe_url: Maybe<Scalars['String']>;
  self: Maybe<Scalars['String']>;
};

export type TeamtailorJobAttributes = {
  apply_button_text: Maybe<Scalars['String']>;
  body: Maybe<Scalars['String']>;
  human_status: Maybe<Scalars['String']>;
  internal: Maybe<Scalars['Boolean']>;
  picture: Maybe<TeamtailorJobAttributesPicture>;
  pinned: Maybe<Scalars['Boolean']>;
  status: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  external_application_url: Maybe<Scalars['String']>;
  name_requirement: Maybe<Scalars['String']>;
  resume_requirement: Maybe<Scalars['String']>;
  cover_letter_requirement: Maybe<Scalars['String']>;
  phone_requirement: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['Date']>;
};


export type TeamtailorJobAttributesCreated_AtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type TeamtailorJobAttributesPicture = {
  standard: Maybe<Scalars['String']>;
  thumb: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationships = {
  department: Maybe<TeamtailorJobRelationshipsDepartment>;
  role: Maybe<TeamtailorJobRelationshipsRole>;
  location: Maybe<TeamtailorJobRelationshipsLocation>;
  user: Maybe<TeamtailorJobRelationshipsUser>;
  questions: Maybe<TeamtailorJobRelationshipsQuestions>;
  candidates: Maybe<TeamtailorJobRelationshipsCandidates>;
  stages: Maybe<TeamtailorJobRelationshipsStages>;
  colleagues: Maybe<TeamtailorJobRelationshipsColleagues>;
  team_memberships: Maybe<TeamtailorJobRelationshipsTeam_Memberships>;
  picked_questions: Maybe<TeamtailorJobRelationshipsPicked_Questions>;
};

export type TeamtailorJobRelationshipsDepartment = {
  links: Maybe<TeamtailorJobRelationshipsDepartmentLinks>;
};

export type TeamtailorJobRelationshipsDepartmentLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsRole = {
  data: Maybe<TeamtailorJobRelationshipsRoleData>;
};

export type TeamtailorJobRelationshipsRoleData = {
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  links: Maybe<TeamtailorJobRelationshipsRoleDataLinks>;
  attributes: Maybe<TeamtailorJobRelationshipsRoleDataAttributes>;
  relationships: Maybe<TeamtailorJobRelationshipsRoleDataRelationships>;
};

export type TeamtailorJobRelationshipsRoleDataLinks = {
  self: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsRoleDataAttributes = {
  name: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsRoleDataRelationships = {
  department: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartment>;
};

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartment = {
  links: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinks>;
};

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsLocation = {
  links: Maybe<TeamtailorJobRelationshipsLocationLinks>;
};

export type TeamtailorJobRelationshipsLocationLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsUser = {
  links: Maybe<TeamtailorJobRelationshipsUserLinks>;
};

export type TeamtailorJobRelationshipsUserLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsQuestions = {
  links: Maybe<TeamtailorJobRelationshipsQuestionsLinks>;
};

export type TeamtailorJobRelationshipsQuestionsLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsCandidates = {
  links: Maybe<TeamtailorJobRelationshipsCandidatesLinks>;
};

export type TeamtailorJobRelationshipsCandidatesLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsStages = {
  links: Maybe<TeamtailorJobRelationshipsStagesLinks>;
};

export type TeamtailorJobRelationshipsStagesLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsColleagues = {
  links: Maybe<TeamtailorJobRelationshipsColleaguesLinks>;
};

export type TeamtailorJobRelationshipsColleaguesLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsTeam_Memberships = {
  links: Maybe<TeamtailorJobRelationshipsTeam_MembershipsLinks>;
};

export type TeamtailorJobRelationshipsTeam_MembershipsLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobRelationshipsPicked_Questions = {
  links: Maybe<TeamtailorJobRelationshipsPicked_QuestionsLinks>;
};

export type TeamtailorJobRelationshipsPicked_QuestionsLinks = {
  self: Maybe<Scalars['String']>;
  related: Maybe<Scalars['String']>;
};

export type TeamtailorJobFields = {
  href: Maybe<Scalars['String']>;
};

export type O365User = Node & {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  businessPhones: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName: Maybe<Scalars['String']>;
  givenName: Maybe<Scalars['String']>;
  mail: Maybe<Scalars['String']>;
  mobilePhone: Maybe<Scalars['String']>;
  officeLocation: Maybe<Scalars['String']>;
  preferredLanguage: Maybe<Scalars['String']>;
  surname: Maybe<Scalars['String']>;
  userPrincipalName: Maybe<Scalars['String']>;
};

export type ContentYaml = Node & {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name: Maybe<Scalars['String']>;
  address: Maybe<ContentYamlAddress>;
  coordinates: Maybe<Array<Maybe<Scalars['Float']>>>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  social: Maybe<ContentYamlSocial>;
  contacts: Maybe<Array<Maybe<ContentYamlContacts>>>;
};

export type ContentYamlAddress = {
  street: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
};

export type ContentYamlSocial = {
  bitbucket: Maybe<Scalars['String']>;
  facebook: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  instagram: Maybe<Scalars['String']>;
  linkedin: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
};

export type ContentYamlContacts = {
  role: Maybe<Scalars['String']>;
  personId: Maybe<Scalars['String']>;
};

export type Query = {
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  teamtailorJob: Maybe<TeamtailorJob>;
  allTeamtailorJob: TeamtailorJobConnection;
  o365User: Maybe<O365User>;
  allO365User: O365UserConnection;
  contentYaml: Maybe<ContentYaml>;
  allContentYaml: ContentYamlConnection;
};


export type QueryFileArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childrenContentYaml: InputMaybe<ContentYamlFilterListInput>;
  childContentYaml: InputMaybe<ContentYamlFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  sort: InputMaybe<FileSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  sort: InputMaybe<DirectorySortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  sort: InputMaybe<SiteSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  sort: InputMaybe<SiteFunctionSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path: InputMaybe<StringQueryOperatorInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  sort: InputMaybe<SitePageSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  sort: InputMaybe<SitePluginSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  sort: InputMaybe<ImageSharpSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryTeamtailorJobArgs = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  links: InputMaybe<TeamtailorJobLinksFilterInput>;
  attributes: InputMaybe<TeamtailorJobAttributesFilterInput>;
  relationships: InputMaybe<TeamtailorJobRelationshipsFilterInput>;
  fields: InputMaybe<TeamtailorJobFieldsFilterInput>;
};


export type QueryAllTeamtailorJobArgs = {
  filter: InputMaybe<TeamtailorJobFilterInput>;
  sort: InputMaybe<TeamtailorJobSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryO365UserArgs = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  businessPhones: InputMaybe<StringQueryOperatorInput>;
  displayName: InputMaybe<StringQueryOperatorInput>;
  givenName: InputMaybe<StringQueryOperatorInput>;
  mail: InputMaybe<StringQueryOperatorInput>;
  mobilePhone: InputMaybe<StringQueryOperatorInput>;
  officeLocation: InputMaybe<StringQueryOperatorInput>;
  preferredLanguage: InputMaybe<StringQueryOperatorInput>;
  surname: InputMaybe<StringQueryOperatorInput>;
  userPrincipalName: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllO365UserArgs = {
  filter: InputMaybe<O365UserFilterInput>;
  sort: InputMaybe<O365UserSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryContentYamlArgs = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  address: InputMaybe<ContentYamlAddressFilterInput>;
  coordinates: InputMaybe<FloatQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  social: InputMaybe<ContentYamlSocialFilterInput>;
  contacts: InputMaybe<ContentYamlContactsFilterListInput>;
};


export type QueryAllContentYamlArgs = {
  filter: InputMaybe<ContentYamlFilterInput>;
  sort: InputMaybe<ContentYamlSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  ne: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  tagLine: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  avatar: InputMaybe<StringQueryOperatorInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  social: InputMaybe<MarkdownRemarkFrontmatterSocialFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  authors: InputMaybe<StringQueryOperatorInput>;
  index: InputMaybe<IntQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  alumni: InputMaybe<BooleanQueryOperatorInput>;
  publishDate: InputMaybe<DateQueryOperatorInput>;
  location: InputMaybe<StringQueryOperatorInput>;
  start: InputMaybe<DateQueryOperatorInput>;
  end: InputMaybe<DateQueryOperatorInput>;
  active: InputMaybe<BooleanQueryOperatorInput>;
  images: InputMaybe<StringQueryOperatorInput>;
  schema: InputMaybe<MarkdownRemarkFrontmatterSchemaFilterListInput>;
  heading: InputMaybe<StringQueryOperatorInput>;
  lead: InputMaybe<StringQueryOperatorInput>;
  collageImages: InputMaybe<MarkdownRemarkFrontmatterCollageImagesFilterListInput>;
  section1: InputMaybe<MarkdownRemarkFrontmatterSection1FilterInput>;
  section2: InputMaybe<MarkdownRemarkFrontmatterSection2FilterInput>;
  Telefon: InputMaybe<StringQueryOperatorInput>;
  section3: InputMaybe<MarkdownRemarkFrontmatterSection3FilterInput>;
  section4: InputMaybe<MarkdownRemarkFrontmatterSection4FilterInput>;
};

export type MarkdownRemarkFrontmatterSocialFilterInput = {
  github: InputMaybe<StringQueryOperatorInput>;
  linkedin: InputMaybe<StringQueryOperatorInput>;
  keybase: InputMaybe<StringQueryOperatorInput>;
  twitter: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  ne: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFrontmatterSchemaFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFrontmatterSchemaFilterInput>;
};

export type MarkdownRemarkFrontmatterSchemaFilterInput = {
  winner: InputMaybe<BooleanQueryOperatorInput>;
  start: InputMaybe<DateQueryOperatorInput>;
  end: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  details: InputMaybe<StringQueryOperatorInput>;
  location: InputMaybe<MarkdownRemarkFrontmatterSchemaLocationFilterInput>;
  presenters: InputMaybe<StringQueryOperatorInput>;
  externalpresenter: InputMaybe<MarkdownRemarkFrontmatterSchemaExternalpresenterFilterInput>;
  presentation: InputMaybe<StringQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  youtubeId: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSchemaLocationFilterInput = {
  coordinates: InputMaybe<FloatQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSchemaExternalpresenterFilterInput = {
  name: InputMaybe<StringQueryOperatorInput>;
  avatarSrc: InputMaybe<StringQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterCollageImagesFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFrontmatterCollageImagesFilterInput>;
};

export type MarkdownRemarkFrontmatterCollageImagesFilterInput = {
  collageImage: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSection1FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  subheading: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSection2FilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  heading: InputMaybe<StringQueryOperatorInput>;
  subheading: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSection3FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSection4FilterInput = {
  heading: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsFilterInput = {
  href: InputMaybe<StringQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  ne: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  value: InputMaybe<StringQueryOperatorInput>;
  depth: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>;
  sentences: InputMaybe<IntQueryOperatorInput>;
  words: InputMaybe<IntQueryOperatorInput>;
};

export type NodeFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpOriginalFilterInput = {
  width: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
};

export type ContentYamlFilterListInput = {
  elemMatch: InputMaybe<ContentYamlFilterInput>;
};

export type ContentYamlFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  address: InputMaybe<ContentYamlAddressFilterInput>;
  coordinates: InputMaybe<FloatQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  social: InputMaybe<ContentYamlSocialFilterInput>;
  contacts: InputMaybe<ContentYamlContactsFilterListInput>;
};

export type ContentYamlAddressFilterInput = {
  street: InputMaybe<StringQueryOperatorInput>;
  postalCode: InputMaybe<StringQueryOperatorInput>;
  city: InputMaybe<StringQueryOperatorInput>;
};

export type ContentYamlSocialFilterInput = {
  bitbucket: InputMaybe<StringQueryOperatorInput>;
  facebook: InputMaybe<StringQueryOperatorInput>;
  github: InputMaybe<StringQueryOperatorInput>;
  instagram: InputMaybe<StringQueryOperatorInput>;
  linkedin: InputMaybe<StringQueryOperatorInput>;
  twitter: InputMaybe<StringQueryOperatorInput>;
};

export type ContentYamlContactsFilterListInput = {
  elemMatch: InputMaybe<ContentYamlContactsFilterInput>;
};

export type ContentYamlContactsFilterInput = {
  role: InputMaybe<StringQueryOperatorInput>;
  personId: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___type'
  | 'childrenMarkdownRemark___frontmatter___id'
  | 'childrenMarkdownRemark___frontmatter___tagLine'
  | 'childrenMarkdownRemark___frontmatter___image'
  | 'childrenMarkdownRemark___frontmatter___avatar'
  | 'childrenMarkdownRemark___frontmatter___phone'
  | 'childrenMarkdownRemark___frontmatter___email'
  | 'childrenMarkdownRemark___frontmatter___social___github'
  | 'childrenMarkdownRemark___frontmatter___social___linkedin'
  | 'childrenMarkdownRemark___frontmatter___social___keybase'
  | 'childrenMarkdownRemark___frontmatter___social___twitter'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___authors'
  | 'childrenMarkdownRemark___frontmatter___index'
  | 'childrenMarkdownRemark___frontmatter___href'
  | 'childrenMarkdownRemark___frontmatter___alumni'
  | 'childrenMarkdownRemark___frontmatter___publishDate'
  | 'childrenMarkdownRemark___frontmatter___location'
  | 'childrenMarkdownRemark___frontmatter___start'
  | 'childrenMarkdownRemark___frontmatter___end'
  | 'childrenMarkdownRemark___frontmatter___active'
  | 'childrenMarkdownRemark___frontmatter___images'
  | 'childrenMarkdownRemark___frontmatter___schema'
  | 'childrenMarkdownRemark___frontmatter___schema___winner'
  | 'childrenMarkdownRemark___frontmatter___schema___start'
  | 'childrenMarkdownRemark___frontmatter___schema___end'
  | 'childrenMarkdownRemark___frontmatter___schema___title'
  | 'childrenMarkdownRemark___frontmatter___schema___type'
  | 'childrenMarkdownRemark___frontmatter___schema___details'
  | 'childrenMarkdownRemark___frontmatter___schema___presenters'
  | 'childrenMarkdownRemark___frontmatter___schema___presentation'
  | 'childrenMarkdownRemark___frontmatter___schema___href'
  | 'childrenMarkdownRemark___frontmatter___schema___youtubeId'
  | 'childrenMarkdownRemark___frontmatter___heading'
  | 'childrenMarkdownRemark___frontmatter___lead'
  | 'childrenMarkdownRemark___frontmatter___collageImages'
  | 'childrenMarkdownRemark___frontmatter___collageImages___collageImage'
  | 'childrenMarkdownRemark___frontmatter___section1___heading'
  | 'childrenMarkdownRemark___frontmatter___section1___content'
  | 'childrenMarkdownRemark___frontmatter___section1___subheading'
  | 'childrenMarkdownRemark___frontmatter___section2___content'
  | 'childrenMarkdownRemark___frontmatter___section2___heading'
  | 'childrenMarkdownRemark___frontmatter___section2___subheading'
  | 'childrenMarkdownRemark___frontmatter___Telefon'
  | 'childrenMarkdownRemark___frontmatter___section3___heading'
  | 'childrenMarkdownRemark___frontmatter___section4___heading'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___href'
  | 'childrenMarkdownRemark___fields___date'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___type'
  | 'childMarkdownRemark___frontmatter___id'
  | 'childMarkdownRemark___frontmatter___tagLine'
  | 'childMarkdownRemark___frontmatter___image'
  | 'childMarkdownRemark___frontmatter___avatar'
  | 'childMarkdownRemark___frontmatter___phone'
  | 'childMarkdownRemark___frontmatter___email'
  | 'childMarkdownRemark___frontmatter___social___github'
  | 'childMarkdownRemark___frontmatter___social___linkedin'
  | 'childMarkdownRemark___frontmatter___social___keybase'
  | 'childMarkdownRemark___frontmatter___social___twitter'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___authors'
  | 'childMarkdownRemark___frontmatter___index'
  | 'childMarkdownRemark___frontmatter___href'
  | 'childMarkdownRemark___frontmatter___alumni'
  | 'childMarkdownRemark___frontmatter___publishDate'
  | 'childMarkdownRemark___frontmatter___location'
  | 'childMarkdownRemark___frontmatter___start'
  | 'childMarkdownRemark___frontmatter___end'
  | 'childMarkdownRemark___frontmatter___active'
  | 'childMarkdownRemark___frontmatter___images'
  | 'childMarkdownRemark___frontmatter___schema'
  | 'childMarkdownRemark___frontmatter___schema___winner'
  | 'childMarkdownRemark___frontmatter___schema___start'
  | 'childMarkdownRemark___frontmatter___schema___end'
  | 'childMarkdownRemark___frontmatter___schema___title'
  | 'childMarkdownRemark___frontmatter___schema___type'
  | 'childMarkdownRemark___frontmatter___schema___details'
  | 'childMarkdownRemark___frontmatter___schema___presenters'
  | 'childMarkdownRemark___frontmatter___schema___presentation'
  | 'childMarkdownRemark___frontmatter___schema___href'
  | 'childMarkdownRemark___frontmatter___schema___youtubeId'
  | 'childMarkdownRemark___frontmatter___heading'
  | 'childMarkdownRemark___frontmatter___lead'
  | 'childMarkdownRemark___frontmatter___collageImages'
  | 'childMarkdownRemark___frontmatter___collageImages___collageImage'
  | 'childMarkdownRemark___frontmatter___section1___heading'
  | 'childMarkdownRemark___frontmatter___section1___content'
  | 'childMarkdownRemark___frontmatter___section1___subheading'
  | 'childMarkdownRemark___frontmatter___section2___content'
  | 'childMarkdownRemark___frontmatter___section2___heading'
  | 'childMarkdownRemark___frontmatter___section2___subheading'
  | 'childMarkdownRemark___frontmatter___Telefon'
  | 'childMarkdownRemark___frontmatter___section3___heading'
  | 'childMarkdownRemark___frontmatter___section4___heading'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___href'
  | 'childMarkdownRemark___fields___date'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenContentYaml'
  | 'childrenContentYaml___id'
  | 'childrenContentYaml___parent___id'
  | 'childrenContentYaml___parent___parent___id'
  | 'childrenContentYaml___parent___parent___children'
  | 'childrenContentYaml___parent___children'
  | 'childrenContentYaml___parent___children___id'
  | 'childrenContentYaml___parent___children___children'
  | 'childrenContentYaml___parent___internal___content'
  | 'childrenContentYaml___parent___internal___contentDigest'
  | 'childrenContentYaml___parent___internal___description'
  | 'childrenContentYaml___parent___internal___fieldOwners'
  | 'childrenContentYaml___parent___internal___ignoreType'
  | 'childrenContentYaml___parent___internal___mediaType'
  | 'childrenContentYaml___parent___internal___owner'
  | 'childrenContentYaml___parent___internal___type'
  | 'childrenContentYaml___children'
  | 'childrenContentYaml___children___id'
  | 'childrenContentYaml___children___parent___id'
  | 'childrenContentYaml___children___parent___children'
  | 'childrenContentYaml___children___children'
  | 'childrenContentYaml___children___children___id'
  | 'childrenContentYaml___children___children___children'
  | 'childrenContentYaml___children___internal___content'
  | 'childrenContentYaml___children___internal___contentDigest'
  | 'childrenContentYaml___children___internal___description'
  | 'childrenContentYaml___children___internal___fieldOwners'
  | 'childrenContentYaml___children___internal___ignoreType'
  | 'childrenContentYaml___children___internal___mediaType'
  | 'childrenContentYaml___children___internal___owner'
  | 'childrenContentYaml___children___internal___type'
  | 'childrenContentYaml___internal___content'
  | 'childrenContentYaml___internal___contentDigest'
  | 'childrenContentYaml___internal___description'
  | 'childrenContentYaml___internal___fieldOwners'
  | 'childrenContentYaml___internal___ignoreType'
  | 'childrenContentYaml___internal___mediaType'
  | 'childrenContentYaml___internal___owner'
  | 'childrenContentYaml___internal___type'
  | 'childrenContentYaml___name'
  | 'childrenContentYaml___address___street'
  | 'childrenContentYaml___address___postalCode'
  | 'childrenContentYaml___address___city'
  | 'childrenContentYaml___coordinates'
  | 'childrenContentYaml___email'
  | 'childrenContentYaml___phone'
  | 'childrenContentYaml___social___bitbucket'
  | 'childrenContentYaml___social___facebook'
  | 'childrenContentYaml___social___github'
  | 'childrenContentYaml___social___instagram'
  | 'childrenContentYaml___social___linkedin'
  | 'childrenContentYaml___social___twitter'
  | 'childrenContentYaml___contacts'
  | 'childrenContentYaml___contacts___role'
  | 'childrenContentYaml___contacts___personId'
  | 'childContentYaml___id'
  | 'childContentYaml___parent___id'
  | 'childContentYaml___parent___parent___id'
  | 'childContentYaml___parent___parent___children'
  | 'childContentYaml___parent___children'
  | 'childContentYaml___parent___children___id'
  | 'childContentYaml___parent___children___children'
  | 'childContentYaml___parent___internal___content'
  | 'childContentYaml___parent___internal___contentDigest'
  | 'childContentYaml___parent___internal___description'
  | 'childContentYaml___parent___internal___fieldOwners'
  | 'childContentYaml___parent___internal___ignoreType'
  | 'childContentYaml___parent___internal___mediaType'
  | 'childContentYaml___parent___internal___owner'
  | 'childContentYaml___parent___internal___type'
  | 'childContentYaml___children'
  | 'childContentYaml___children___id'
  | 'childContentYaml___children___parent___id'
  | 'childContentYaml___children___parent___children'
  | 'childContentYaml___children___children'
  | 'childContentYaml___children___children___id'
  | 'childContentYaml___children___children___children'
  | 'childContentYaml___children___internal___content'
  | 'childContentYaml___children___internal___contentDigest'
  | 'childContentYaml___children___internal___description'
  | 'childContentYaml___children___internal___fieldOwners'
  | 'childContentYaml___children___internal___ignoreType'
  | 'childContentYaml___children___internal___mediaType'
  | 'childContentYaml___children___internal___owner'
  | 'childContentYaml___children___internal___type'
  | 'childContentYaml___internal___content'
  | 'childContentYaml___internal___contentDigest'
  | 'childContentYaml___internal___description'
  | 'childContentYaml___internal___fieldOwners'
  | 'childContentYaml___internal___ignoreType'
  | 'childContentYaml___internal___mediaType'
  | 'childContentYaml___internal___owner'
  | 'childContentYaml___internal___type'
  | 'childContentYaml___name'
  | 'childContentYaml___address___street'
  | 'childContentYaml___address___postalCode'
  | 'childContentYaml___address___city'
  | 'childContentYaml___coordinates'
  | 'childContentYaml___email'
  | 'childContentYaml___phone'
  | 'childContentYaml___social___bitbucket'
  | 'childContentYaml___social___facebook'
  | 'childContentYaml___social___github'
  | 'childContentYaml___social___instagram'
  | 'childContentYaml___social___linkedin'
  | 'childContentYaml___social___twitter'
  | 'childContentYaml___contacts'
  | 'childContentYaml___contacts___role'
  | 'childContentYaml___contacts___personId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childrenContentYaml: InputMaybe<ContentYamlFilterListInput>;
  childContentYaml: InputMaybe<ContentYamlFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
  rssBlogTitle: InputMaybe<StringQueryOperatorInput>;
  rssBlogDescription: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___rssBlogTitle'
  | 'siteMetadata___rssBlogDescription'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path: InputMaybe<StringQueryOperatorInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___type'
  | 'frontmatter___id'
  | 'frontmatter___tagLine'
  | 'frontmatter___image'
  | 'frontmatter___avatar'
  | 'frontmatter___phone'
  | 'frontmatter___email'
  | 'frontmatter___social___github'
  | 'frontmatter___social___linkedin'
  | 'frontmatter___social___keybase'
  | 'frontmatter___social___twitter'
  | 'frontmatter___tags'
  | 'frontmatter___authors'
  | 'frontmatter___index'
  | 'frontmatter___href'
  | 'frontmatter___alumni'
  | 'frontmatter___publishDate'
  | 'frontmatter___location'
  | 'frontmatter___start'
  | 'frontmatter___end'
  | 'frontmatter___active'
  | 'frontmatter___images'
  | 'frontmatter___schema'
  | 'frontmatter___schema___winner'
  | 'frontmatter___schema___start'
  | 'frontmatter___schema___end'
  | 'frontmatter___schema___title'
  | 'frontmatter___schema___type'
  | 'frontmatter___schema___details'
  | 'frontmatter___schema___location___coordinates'
  | 'frontmatter___schema___location___title'
  | 'frontmatter___schema___presenters'
  | 'frontmatter___schema___externalpresenter___name'
  | 'frontmatter___schema___externalpresenter___avatarSrc'
  | 'frontmatter___schema___externalpresenter___href'
  | 'frontmatter___schema___presentation'
  | 'frontmatter___schema___href'
  | 'frontmatter___schema___youtubeId'
  | 'frontmatter___heading'
  | 'frontmatter___lead'
  | 'frontmatter___collageImages'
  | 'frontmatter___collageImages___collageImage'
  | 'frontmatter___section1___heading'
  | 'frontmatter___section1___content'
  | 'frontmatter___section1___subheading'
  | 'frontmatter___section2___content'
  | 'frontmatter___section2___heading'
  | 'frontmatter___section2___subheading'
  | 'frontmatter___Telefon'
  | 'frontmatter___section3___heading'
  | 'frontmatter___section4___heading'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___href'
  | 'fields___date'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type TeamtailorJobLinksFilterInput = {
  careersite_job_url: InputMaybe<StringQueryOperatorInput>;
  careersite_job_apply_url: InputMaybe<StringQueryOperatorInput>;
  careersite_job_apply_iframe_url: InputMaybe<StringQueryOperatorInput>;
  self: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobAttributesFilterInput = {
  apply_button_text: InputMaybe<StringQueryOperatorInput>;
  body: InputMaybe<StringQueryOperatorInput>;
  human_status: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<BooleanQueryOperatorInput>;
  picture: InputMaybe<TeamtailorJobAttributesPictureFilterInput>;
  pinned: InputMaybe<BooleanQueryOperatorInput>;
  status: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  external_application_url: InputMaybe<StringQueryOperatorInput>;
  name_requirement: InputMaybe<StringQueryOperatorInput>;
  resume_requirement: InputMaybe<StringQueryOperatorInput>;
  cover_letter_requirement: InputMaybe<StringQueryOperatorInput>;
  phone_requirement: InputMaybe<StringQueryOperatorInput>;
  created_at: InputMaybe<DateQueryOperatorInput>;
};

export type TeamtailorJobAttributesPictureFilterInput = {
  standard: InputMaybe<StringQueryOperatorInput>;
  thumb: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsFilterInput = {
  department: InputMaybe<TeamtailorJobRelationshipsDepartmentFilterInput>;
  role: InputMaybe<TeamtailorJobRelationshipsRoleFilterInput>;
  location: InputMaybe<TeamtailorJobRelationshipsLocationFilterInput>;
  user: InputMaybe<TeamtailorJobRelationshipsUserFilterInput>;
  questions: InputMaybe<TeamtailorJobRelationshipsQuestionsFilterInput>;
  candidates: InputMaybe<TeamtailorJobRelationshipsCandidatesFilterInput>;
  stages: InputMaybe<TeamtailorJobRelationshipsStagesFilterInput>;
  colleagues: InputMaybe<TeamtailorJobRelationshipsColleaguesFilterInput>;
  team_memberships: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsFilterInput>;
  picked_questions: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsFilterInput>;
};

export type TeamtailorJobRelationshipsDepartmentFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsDepartmentLinksFilterInput>;
};

export type TeamtailorJobRelationshipsDepartmentLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsRoleFilterInput = {
  data: InputMaybe<TeamtailorJobRelationshipsRoleDataFilterInput>;
};

export type TeamtailorJobRelationshipsRoleDataFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataLinksFilterInput>;
  attributes: InputMaybe<TeamtailorJobRelationshipsRoleDataAttributesFilterInput>;
  relationships: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsFilterInput>;
};

export type TeamtailorJobRelationshipsRoleDataLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsRoleDataAttributesFilterInput = {
  name: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsRoleDataRelationshipsFilterInput = {
  department: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFilterInput>;
};

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFilterInput>;
};

export type TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsLocationFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsLocationLinksFilterInput>;
};

export type TeamtailorJobRelationshipsLocationLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsUserFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsUserLinksFilterInput>;
};

export type TeamtailorJobRelationshipsUserLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsQuestionsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsQuestionsLinksFilterInput>;
};

export type TeamtailorJobRelationshipsQuestionsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsCandidatesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsCandidatesLinksFilterInput>;
};

export type TeamtailorJobRelationshipsCandidatesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsStagesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsStagesLinksFilterInput>;
};

export type TeamtailorJobRelationshipsStagesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsColleaguesFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsColleaguesLinksFilterInput>;
};

export type TeamtailorJobRelationshipsColleaguesLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsTeam_MembershipsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsTeam_MembershipsLinksFilterInput>;
};

export type TeamtailorJobRelationshipsTeam_MembershipsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobRelationshipsPicked_QuestionsFilterInput = {
  links: InputMaybe<TeamtailorJobRelationshipsPicked_QuestionsLinksFilterInput>;
};

export type TeamtailorJobRelationshipsPicked_QuestionsLinksFilterInput = {
  self: InputMaybe<StringQueryOperatorInput>;
  related: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobFieldsFilterInput = {
  href: InputMaybe<StringQueryOperatorInput>;
};

export type TeamtailorJobConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TeamtailorJobEdge>;
  nodes: Array<TeamtailorJob>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<TeamtailorJobGroupConnection>;
};


export type TeamtailorJobConnectionDistinctArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobConnectionMaxArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobConnectionMinArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobConnectionSumArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: TeamtailorJobFieldsEnum;
};

export type TeamtailorJobEdge = {
  next: Maybe<TeamtailorJob>;
  node: TeamtailorJob;
  previous: Maybe<TeamtailorJob>;
};

export type TeamtailorJobFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'links___careersite_job_url'
  | 'links___careersite_job_apply_url'
  | 'links___careersite_job_apply_iframe_url'
  | 'links___self'
  | 'attributes___apply_button_text'
  | 'attributes___body'
  | 'attributes___human_status'
  | 'attributes___internal'
  | 'attributes___picture___standard'
  | 'attributes___picture___thumb'
  | 'attributes___pinned'
  | 'attributes___status'
  | 'attributes___title'
  | 'attributes___external_application_url'
  | 'attributes___name_requirement'
  | 'attributes___resume_requirement'
  | 'attributes___cover_letter_requirement'
  | 'attributes___phone_requirement'
  | 'attributes___created_at'
  | 'relationships___department___links___self'
  | 'relationships___department___links___related'
  | 'relationships___role___data___id'
  | 'relationships___role___data___type'
  | 'relationships___location___links___self'
  | 'relationships___location___links___related'
  | 'relationships___user___links___self'
  | 'relationships___user___links___related'
  | 'relationships___questions___links___self'
  | 'relationships___questions___links___related'
  | 'relationships___candidates___links___self'
  | 'relationships___candidates___links___related'
  | 'relationships___stages___links___self'
  | 'relationships___stages___links___related'
  | 'relationships___colleagues___links___self'
  | 'relationships___colleagues___links___related'
  | 'relationships___team_memberships___links___self'
  | 'relationships___team_memberships___links___related'
  | 'relationships___picked_questions___links___self'
  | 'relationships___picked_questions___links___related'
  | 'fields___href';

export type TeamtailorJobGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TeamtailorJobEdge>;
  nodes: Array<TeamtailorJob>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<TeamtailorJobGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type TeamtailorJobGroupConnectionDistinctArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobGroupConnectionMaxArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobGroupConnectionMinArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobGroupConnectionSumArgs = {
  field: TeamtailorJobFieldsEnum;
};


export type TeamtailorJobGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: TeamtailorJobFieldsEnum;
};

export type TeamtailorJobFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  links: InputMaybe<TeamtailorJobLinksFilterInput>;
  attributes: InputMaybe<TeamtailorJobAttributesFilterInput>;
  relationships: InputMaybe<TeamtailorJobRelationshipsFilterInput>;
  fields: InputMaybe<TeamtailorJobFieldsFilterInput>;
};

export type TeamtailorJobSortInput = {
  fields: InputMaybe<Array<InputMaybe<TeamtailorJobFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type O365UserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<O365UserEdge>;
  nodes: Array<O365User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<O365UserGroupConnection>;
};


export type O365UserConnectionDistinctArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserConnectionMaxArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserConnectionMinArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserConnectionSumArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: O365UserFieldsEnum;
};

export type O365UserEdge = {
  next: Maybe<O365User>;
  node: O365User;
  previous: Maybe<O365User>;
};

export type O365UserFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'businessPhones'
  | 'displayName'
  | 'givenName'
  | 'mail'
  | 'mobilePhone'
  | 'officeLocation'
  | 'preferredLanguage'
  | 'surname'
  | 'userPrincipalName';

export type O365UserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<O365UserEdge>;
  nodes: Array<O365User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<O365UserGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type O365UserGroupConnectionDistinctArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserGroupConnectionMaxArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserGroupConnectionMinArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserGroupConnectionSumArgs = {
  field: O365UserFieldsEnum;
};


export type O365UserGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: O365UserFieldsEnum;
};

export type O365UserFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  businessPhones: InputMaybe<StringQueryOperatorInput>;
  displayName: InputMaybe<StringQueryOperatorInput>;
  givenName: InputMaybe<StringQueryOperatorInput>;
  mail: InputMaybe<StringQueryOperatorInput>;
  mobilePhone: InputMaybe<StringQueryOperatorInput>;
  officeLocation: InputMaybe<StringQueryOperatorInput>;
  preferredLanguage: InputMaybe<StringQueryOperatorInput>;
  surname: InputMaybe<StringQueryOperatorInput>;
  userPrincipalName: InputMaybe<StringQueryOperatorInput>;
};

export type O365UserSortInput = {
  fields: InputMaybe<Array<InputMaybe<O365UserFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentYamlEdge>;
  nodes: Array<ContentYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ContentYamlGroupConnection>;
};


export type ContentYamlConnectionDistinctArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlConnectionMaxArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlConnectionMinArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlConnectionSumArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ContentYamlFieldsEnum;
};

export type ContentYamlEdge = {
  next: Maybe<ContentYaml>;
  node: ContentYaml;
  previous: Maybe<ContentYaml>;
};

export type ContentYamlFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'address___street'
  | 'address___postalCode'
  | 'address___city'
  | 'coordinates'
  | 'email'
  | 'phone'
  | 'social___bitbucket'
  | 'social___facebook'
  | 'social___github'
  | 'social___instagram'
  | 'social___linkedin'
  | 'social___twitter'
  | 'contacts'
  | 'contacts___role'
  | 'contacts___personId';

export type ContentYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentYamlEdge>;
  nodes: Array<ContentYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ContentYamlGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type ContentYamlGroupConnectionDistinctArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlGroupConnectionMaxArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlGroupConnectionMinArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlGroupConnectionSumArgs = {
  field: ContentYamlFieldsEnum;
};


export type ContentYamlGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ContentYamlFieldsEnum;
};

export type ContentYamlSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentYamlFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PersonsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQueryQuery = { persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, images: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type KitsInfoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type KitsInfoQueryQuery = { kits: { edges: Array<{ node: { name: string, phone: string, email: string, address: { street: string, postalCode: string, city: string }, social: { facebook: string, github: string, linkedin: string, twitter: string } } }> } };

export type IndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string } } }> }, blog: { edges: Array<{ node: { html: string, fields: { href: string, date: any }, frontmatter: { authors: Array<string>, title: string } } }> }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, avatars: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type OfferPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OfferPageQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string, section1: { heading: string }, section2: { heading: string, content: string } } } }> }, offers: { edges: Array<{ node: { html: string, frontmatter: { id: string, title: string } } }> }, projects: { edges: Array<{ node: { html: string, frontmatter: { index: number, title: string, image: string, href: string } } }> }, images: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string, section1: { subheading: string, heading: string, content: string }, section2: { subheading: string, heading: string, content: string }, section3: { heading: string }, section4: { heading: string } } } }> }, news: { edges: Array<{ node: { html: string, fields: { href: string, date: any }, frontmatter: { authors: Array<string>, title: string, heading: string, image: string } } }> }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, blog: { edges: Array<{ node: { html: string, fields: { href: string, date: any }, frontmatter: { authors: Array<string>, title: string } } }> }, avatars: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, images: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, imagesSmall: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type JobPageQueryQueryVariables = Exact<{
  href?: InputMaybe<Scalars['String']>;
}>;


export type JobPageQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string, images: Array<string>, section1: { heading: string }, section2: { content: string, heading: string } } } }> }, activeJob: { id: string }, jobs: { edges: Array<{ node: { id: string, fields: { href: string }, links: { careersite_job_apply_url: string, careersite_job_url: string }, attributes: { title: string, body: string, apply_button_text: string, human_status: string } } }> }, benefits: { edges: Array<{ node: { html: string, frontmatter: { title: string, image: string } } }> }, images: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, collageImages: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, personaImages: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type SecurityPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SecurityPageQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string, images: Array<string>, section1: { heading: string }, section2: { heading: string, content: string } } } }> }, projects: { edges: Array<{ node: { html: string, frontmatter: { index: number, title: string, image: string, href: string } } }> }, pageImages: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, projectImages: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type KonferensInfoQueryQueryVariables = Exact<{
  href?: InputMaybe<Scalars['String']>;
}>;


export type KonferensInfoQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string, section1: { heading: string } } } }> }, activeKitscon: { html: string, frontmatter: { title: string, tagLine: string, location: string, start: any, end: any, image: string, collageImages: Array<{ collageImage: string }>, schema: Array<{ start: any, end: string, href: string, title: string, details: string, presenters: Array<string>, presentation: string, type: string, youtubeId: string, externalpresenter: { name: string, href: string, avatarSrc: string }, location: { coordinates: Array<number>, title: string } }> } }, latestKitscon: { edges: Array<{ node: { html: string, fields: { href: string }, frontmatter: { title: string, tagLine: string, location: string, start: any, end: any, image: string, collageImages: Array<{ collageImage: string }>, schema: Array<{ start: any, end: string, href: string, title: string, details: string, presenters: Array<string>, presentation: string, type: string, youtubeId: string, externalpresenter: { name: string, href: string, avatarSrc: string }, location: { coordinates: Array<number>, title: string } }> } } }> }, kitscons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { start: any } } }> }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, avatars: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> }, collageImages: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type AboutPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQueryQuery = { page: { edges: Array<{ node: { html: string, frontmatter: { title: string, heading: string, lead: string, section1: { heading: string } } } }> }, metadata: { edges: Array<{ node: { name: string, coordinates: Array<number>, address: { street: string }, contacts: Array<{ role: string, personId: string }> } }> }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> } };

export type NewsQueryQueryVariables = Exact<{
  href: Scalars['String'];
}>;


export type NewsQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string } } }> }, news: { html: string, fields: { date: any, href: string }, frontmatter: { authors: Array<string>, title: string } }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, avatars: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type PersonPageQueryQueryVariables = Exact<{
  href: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
}>;


export type PersonPageQueryQuery = { person: { html: string, fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } }, o365person: { mobilePhone: string, officeLocation: string, businessPhones: Array<string> }, images: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type BlogPostQueryQueryVariables = Exact<{
  href: Scalars['String'];
}>;


export type BlogPostQueryQuery = { page: { edges: Array<{ node: { frontmatter: { title: string, heading: string, lead: string } } }> }, post: { html: string, fields: { date: any, href: string }, frontmatter: { authors: Array<string>, title: string } }, persons: { edges: Array<{ node: { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } } }> }, avatars: { edges: Array<{ node: { relativePath: string, childImageSharp: { gatsbyImageData: any } } }> } };

export type BlogFragmentFragment = { node: { html: string, fields: { href: string, date: any }, frontmatter: { authors: Array<string>, title: string } } };

export type ImageFragmentCollageFragment = { relativePath: string, childImageSharp: { gatsbyImageData: any } };

export type ImageFragmentPersonaFragment = { relativePath: string, childImageSharp: { gatsbyImageData: any } };

export type ImageFragmentFragment = { relativePath: string, childImageSharp: { gatsbyImageData: any } };

export type ImageFragmentAvatarFragment = { relativePath: string, childImageSharp: { gatsbyImageData: any } };

export type ImageFragmentSmallFragment = { relativePath: string, childImageSharp: { gatsbyImageData: any } };

export type PersonFragmentFragment = { fields: { href: string }, frontmatter: { id: string, title: string, tagLine: string, alumni: boolean, image: string, avatar: string, phone: string, email: string, tags: Array<string>, social: { github: string, linkedin: string, keybase: string, twitter: string } } };

export type GatsbyImageSharpFixedFragment = { base64: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFluidFragment = { base64: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };
