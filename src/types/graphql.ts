export type Maybe<T> = T | null

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[]

  order?: (Maybe<SitePageConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>

  internalComponentName?: Maybe<SitePageConnectionInternalComponentNameQueryString>

  path?: Maybe<SitePageConnectionPathQueryString_2>

  component?: Maybe<SitePageConnectionComponentQueryString>

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>

  context?: Maybe<SitePageConnectionContextInputObject>

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>

  id?: Maybe<SitePageConnectionIdQueryString_2>

  internal?: Maybe<SitePageConnectionInternalInputObject_2>
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionContextInputObject {
  href?: Maybe<SitePageConnectionContextHrefQueryString>
}

export interface SitePageConnectionContextHrefQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePageConnectionPluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>

  target?: Maybe<SitePageConnectionPluginCreatorPluginOptionsTargetQueryString>

  rel?: Maybe<SitePageConnectionPluginCreatorPluginOptionsRelQueryString>

  maxWidth?: Maybe<SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger>

  wrapperStyle?: Maybe<SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString>

  backgroundColor?: Maybe<SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString>

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >

  showCaptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean>

  pathPrefix?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString>

  withWebp?: Maybe<SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean>

  classPrefix?: Maybe<SitePageConnectionPluginCreatorPluginOptionsClassPrefixQueryString>

  pathCheck?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString>

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString>

  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject>

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList>

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  target?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsTargetQueryString>

  rel?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsRelQueryString>

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >

  wrapperStyle?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString
  >

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >

  showCaptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean
  >

  pathPrefix?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString
  >

  withWebp?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean
  >

  classPrefix?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsTargetQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsRelQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsTargetQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsRelQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsClassPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList>

  peerDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList>

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePageConnectionPluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[]

  order?: (Maybe<SitePluginConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>

  id?: Maybe<SitePluginConnectionIdQueryString_2>

  name?: Maybe<SitePluginConnectionNameQueryString_2>

  version?: Maybe<SitePluginConnectionVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>

  target?: Maybe<SitePluginConnectionPluginOptionsTargetQueryString_2>

  rel?: Maybe<SitePluginConnectionPluginOptionsRelQueryString_2>

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2>

  wrapperStyle?: Maybe<SitePluginConnectionPluginOptionsWrapperStyleQueryString_2>

  backgroundColor?: Maybe<SitePluginConnectionPluginOptionsBackgroundColorQueryString_2>

  linkImagesToOriginal?: Maybe<SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2>

  showCaptions?: Maybe<SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2>

  pathPrefix?: Maybe<SitePluginConnectionPluginOptionsPathPrefixQueryString_2>

  withWebp?: Maybe<SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2>

  classPrefix?: Maybe<SitePluginConnectionPluginOptionsClassPrefixQueryString_2>

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2>

  browserAPIs?: Maybe<SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2>
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  target?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsTargetQueryString_2>

  rel?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsRelQueryString_2>

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2>

  wrapperStyle?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2
  >

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >

  showCaptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2
  >

  pathPrefix?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2>

  withWebp?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2>

  classPrefix?: Maybe<SitePluginConnectionPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsRelQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsRelQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsClassPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginConnectionPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[]

  order?: (Maybe<DirectoryConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectoryConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>

  root?: Maybe<DirectoryConnectionRootQueryString_2>

  dir?: Maybe<DirectoryConnectionDirQueryString_2>

  base?: Maybe<DirectoryConnectionBaseQueryString_2>

  ext?: Maybe<DirectoryConnectionExtQueryString_2>

  name?: Maybe<DirectoryConnectionNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryConnectionInoQueryFloat_2>

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionInoQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[]

  order?: (Maybe<FileConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>

  internal?: Maybe<FileConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>

  extension?: Maybe<FileConnectionExtensionQueryString_2>

  size?: Maybe<FileConnectionSizeQueryInteger_2>

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>

  root?: Maybe<FileConnectionRootQueryString_2>

  dir?: Maybe<FileConnectionDirQueryString_2>

  base?: Maybe<FileConnectionBaseQueryString_2>

  ext?: Maybe<FileConnectionExtQueryString_2>

  name?: Maybe<FileConnectionNameQueryString_2>

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<FileConnectionDevQueryInteger_2>

  mode?: Maybe<FileConnectionModeQueryInteger_2>

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>

  uid?: Maybe<FileConnectionUidQueryInteger_2>

  gid?: Maybe<FileConnectionGidQueryInteger_2>

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>

  ino?: Maybe<FileConnectionInoQueryFloat_2>

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileConnectionAtimeQueryString_2>

  mtime?: Maybe<FileConnectionMtimeQueryString_2>

  ctime?: Maybe<FileConnectionCtimeQueryString_2>

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_4>
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>

  type?: Maybe<FileConnectionInternalTypeQueryString_2>

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionInoQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DuotoneGradient {
  highlight?: Maybe<string>

  shadow?: Maybe<string>

  opacity?: Maybe<number>
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>

  turdSize?: Maybe<number>

  alphaMax?: Maybe<number>

  optCurve?: Maybe<boolean>

  optTolerance?: Maybe<number>

  threshold?: Maybe<number>

  blackOnWhite?: Maybe<boolean>

  color?: Maybe<string>

  background?: Maybe<string>
}

export interface ImageSharpConnectionSort {
  fields: (Maybe<ImageSharpConnectionSortByFieldsEnum>)[]

  order?: (Maybe<ImageSharpConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>

  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_4>

  resolutions?: Maybe<ResolutionsTypeName_4>

  fluid?: Maybe<FluidTypeName_4>

  sizes?: Maybe<SizesTypeName_4>

  original?: Maybe<OriginalTypeName_4>

  resize?: Maybe<ResizeTypeName_4>
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>

  width?: Maybe<FixedWidthQueryFloat_4>

  height?: Maybe<FixedHeightQueryFloat_4>

  src?: Maybe<FixedSrcQueryString_4>

  srcSet?: Maybe<FixedSrcSetQueryString_4>

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>

  originalName?: Maybe<FixedOriginalNameQueryString_4>
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>

  width?: Maybe<ResolutionsWidthQueryFloat_4>

  height?: Maybe<ResolutionsHeightQueryFloat_4>

  src?: Maybe<ResolutionsSrcQueryString_4>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>

  src?: Maybe<FluidSrcQueryString_4>

  srcSet?: Maybe<FluidSrcSetQueryString_4>

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>

  sizes?: Maybe<FluidSizesQueryString_4>

  originalImg?: Maybe<FluidOriginalImgQueryString_4>

  originalName?: Maybe<FluidOriginalNameQueryString_4>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>

  src?: Maybe<SizesSrcQueryString_4>

  srcSet?: Maybe<SizesSrcSetQueryString_4>

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>

  sizes?: Maybe<SizesSizesQueryString_4>

  originalImg?: Maybe<SizesOriginalImgQueryString_4>

  originalName?: Maybe<SizesOriginalNameQueryString_4>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_4 {
  width?: Maybe<OriginalWidthQueryFloat_4>

  height?: Maybe<OriginalHeightQueryFloat_4>

  src?: Maybe<OriginalSrcQueryString_4>
}

export interface OriginalWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_4 {
  src?: Maybe<ResizeSrcQueryString_4>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>

  width?: Maybe<ResizeWidthQueryInt_4>

  height?: Maybe<ResizeHeightQueryInt_4>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>

  originalName?: Maybe<ResizeOriginalNameQueryString_4>
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionSort {
  fields: (Maybe<TeamtailorJobConnectionSortByFieldsEnum>)[]

  order?: (Maybe<TeamtailorJobConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterTeamtailorJob {
  id?: Maybe<TeamtailorJobConnectionIdQueryString_2>

  type?: Maybe<TeamtailorJobConnectionTypeQueryString_2>

  links?: Maybe<TeamtailorJobConnectionLinksInputObject_2>

  attributes?: Maybe<TeamtailorJobConnectionAttributesInputObject_2>

  relationships?: Maybe<TeamtailorJobConnectionRelationshipsInputObject_2>

  internal?: Maybe<TeamtailorJobConnectionInternalInputObject_2>

  fields?: Maybe<TeamtailorJobConnectionFieldsInputObject_2>
}

export interface TeamtailorJobConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionLinksInputObject_2 {
  careersite_job_url?: Maybe<TeamtailorJobConnectionLinksCareersiteJobUrlQueryString_2>

  careersite_job_apply_url?: Maybe<TeamtailorJobConnectionLinksCareersiteJobApplyUrlQueryString_2>

  careersite_job_apply_iframe_url?: Maybe<
    TeamtailorJobConnectionLinksCareersiteJobApplyIframeUrlQueryString_2
  >

  self?: Maybe<TeamtailorJobConnectionLinksSelfQueryString_2>
}

export interface TeamtailorJobConnectionLinksCareersiteJobUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionLinksCareersiteJobApplyUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionLinksCareersiteJobApplyIframeUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesInputObject_2 {
  apply_button_text?: Maybe<TeamtailorJobConnectionAttributesApplyButtonTextQueryString_2>

  body?: Maybe<TeamtailorJobConnectionAttributesBodyQueryString_2>

  human_status?: Maybe<TeamtailorJobConnectionAttributesHumanStatusQueryString_2>

  internal?: Maybe<TeamtailorJobConnectionAttributesInternalQueryBoolean_2>

  picture?: Maybe<TeamtailorJobConnectionAttributesPictureInputObject_2>

  pinned?: Maybe<TeamtailorJobConnectionAttributesPinnedQueryBoolean_2>

  status?: Maybe<TeamtailorJobConnectionAttributesStatusQueryString_2>

  title?: Maybe<TeamtailorJobConnectionAttributesTitleQueryString_2>

  external_application_url?: Maybe<
    TeamtailorJobConnectionAttributesExternalApplicationUrlQueryString_2
  >

  name_requirement?: Maybe<TeamtailorJobConnectionAttributesNameRequirementQueryString_2>

  resume_requirement?: Maybe<TeamtailorJobConnectionAttributesResumeRequirementQueryString_2>

  cover_letter_requirement?: Maybe<
    TeamtailorJobConnectionAttributesCoverLetterRequirementQueryString_2
  >

  phone_requirement?: Maybe<TeamtailorJobConnectionAttributesPhoneRequirementQueryString_2>

  created_at?: Maybe<TeamtailorJobConnectionAttributesCreatedAtQueryString_2>
}

export interface TeamtailorJobConnectionAttributesApplyButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesHumanStatusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesInternalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface TeamtailorJobConnectionAttributesPictureInputObject_2 {
  standard?: Maybe<TeamtailorJobConnectionAttributesPictureStandardQueryString_2>

  thumb?: Maybe<TeamtailorJobConnectionAttributesPictureThumbQueryString_2>
}

export interface TeamtailorJobConnectionAttributesPictureStandardQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesPictureThumbQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesPinnedQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface TeamtailorJobConnectionAttributesStatusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesExternalApplicationUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesNameRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesResumeRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesCoverLetterRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesPhoneRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionAttributesCreatedAtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsInputObject_2 {
  department?: Maybe<TeamtailorJobConnectionRelationshipsDepartmentInputObject_2>

  role?: Maybe<TeamtailorJobConnectionRelationshipsRoleInputObject_2>

  location?: Maybe<TeamtailorJobConnectionRelationshipsLocationInputObject_2>

  user?: Maybe<TeamtailorJobConnectionRelationshipsUserInputObject_2>

  questions?: Maybe<TeamtailorJobConnectionRelationshipsQuestionsInputObject_2>

  candidates?: Maybe<TeamtailorJobConnectionRelationshipsCandidatesInputObject_2>

  stages?: Maybe<TeamtailorJobConnectionRelationshipsStagesInputObject_2>

  colleagues?: Maybe<TeamtailorJobConnectionRelationshipsColleaguesInputObject_2>

  team_memberships?: Maybe<TeamtailorJobConnectionRelationshipsTeamMembershipsInputObject_2>

  picked_questions?: Maybe<TeamtailorJobConnectionRelationshipsPickedQuestionsInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsDepartmentInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsDepartmentLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsDepartmentLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsDepartmentLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsDepartmentLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsDepartmentLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsDepartmentLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleInputObject_2 {
  data?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataInputObject_2 {
  id?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataIdQueryString_2>

  type?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataTypeQueryString_2>

  links?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataLinksInputObject_2>

  attributes?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataAttributesInputObject_2>

  relationships?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataRelationshipsInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataLinksSelfQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataAttributesInputObject_2 {
  name?: Maybe<TeamtailorJobConnectionRelationshipsRoleDataAttributesNameQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataAttributesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataRelationshipsInputObject_2 {
  department?: Maybe<
    TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentInputObject_2
  >
}

export interface TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentInputObject_2 {
  links?: Maybe<
    TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksInputObject_2
  >
}

export interface TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksInputObject_2 {
  self?: Maybe<
    TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksSelfQueryString_2
  >

  related?: Maybe<
    TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksRelatedQueryString_2
  >
}

export interface TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsRoleDataRelationshipsDepartmentLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsLocationInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsLocationLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsLocationLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsLocationLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsLocationLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsLocationLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsLocationLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsUserInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsUserLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsUserLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsUserLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsUserLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsUserLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsUserLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsQuestionsInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsQuestionsLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsQuestionsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsQuestionsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsQuestionsLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsQuestionsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsQuestionsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsCandidatesInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsCandidatesLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsCandidatesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsCandidatesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsCandidatesLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsCandidatesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsCandidatesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsStagesInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsStagesLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsStagesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsStagesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsStagesLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsStagesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsStagesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsColleaguesInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsColleaguesLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsColleaguesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsColleaguesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsColleaguesLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsColleaguesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsColleaguesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsTeamMembershipsInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsTeamMembershipsLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsTeamMembershipsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsTeamMembershipsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsTeamMembershipsLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsTeamMembershipsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsTeamMembershipsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsPickedQuestionsInputObject_2 {
  links?: Maybe<TeamtailorJobConnectionRelationshipsPickedQuestionsLinksInputObject_2>
}

export interface TeamtailorJobConnectionRelationshipsPickedQuestionsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobConnectionRelationshipsPickedQuestionsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobConnectionRelationshipsPickedQuestionsLinksRelatedQueryString_2>
}

export interface TeamtailorJobConnectionRelationshipsPickedQuestionsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionRelationshipsPickedQuestionsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionInternalInputObject_2 {
  type?: Maybe<TeamtailorJobConnectionInternalTypeQueryString_2>

  content?: Maybe<TeamtailorJobConnectionInternalContentQueryString_2>

  contentDigest?: Maybe<TeamtailorJobConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<TeamtailorJobConnectionInternalOwnerQueryString_2>

  fieldOwners?: Maybe<TeamtailorJobConnectionInternalFieldOwnersInputObject_2>
}

export interface TeamtailorJobConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionInternalFieldOwnersInputObject_2 {
  href?: Maybe<TeamtailorJobConnectionInternalFieldOwnersHrefQueryString_2>
}

export interface TeamtailorJobConnectionInternalFieldOwnersHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobConnectionFieldsInputObject_2 {
  href?: Maybe<TeamtailorJobConnectionFieldsHrefQueryString_2>
}

export interface TeamtailorJobConnectionFieldsHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSort {
  fields: (Maybe<ContentYamlConnectionSortByFieldsEnum>)[]

  order?: (Maybe<ContentYamlConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterContentYaml {
  name?: Maybe<ContentYamlConnectionNameQueryString_2>

  address?: Maybe<ContentYamlConnectionAddressInputObject_2>

  coordinates?: Maybe<ContentYamlConnectionCoordinatesQueryList_2>

  email?: Maybe<ContentYamlConnectionEmailQueryString_2>

  phone?: Maybe<ContentYamlConnectionPhoneQueryString_2>

  social?: Maybe<ContentYamlConnectionSocialInputObject_2>

  contacts?: Maybe<ContentYamlConnectionContactsQueryList_2>

  id?: Maybe<ContentYamlConnectionIdQueryString_2>

  internal?: Maybe<ContentYamlConnectionInternalInputObject_2>
}

export interface ContentYamlConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionAddressInputObject_2 {
  street?: Maybe<ContentYamlConnectionAddressStreetQueryString_2>

  postalCode?: Maybe<ContentYamlConnectionAddressPostalCodeQueryString_2>

  city?: Maybe<ContentYamlConnectionAddressCityQueryString_2>
}

export interface ContentYamlConnectionAddressStreetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionAddressPostalCodeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionAddressCityQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionCoordinatesQueryList_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ContentYamlConnectionEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionPhoneQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialInputObject_2 {
  bitbucket?: Maybe<ContentYamlConnectionSocialBitbucketQueryString_2>

  facebook?: Maybe<ContentYamlConnectionSocialFacebookQueryString_2>

  github?: Maybe<ContentYamlConnectionSocialGithubQueryString_2>

  instagram?: Maybe<ContentYamlConnectionSocialInstagramQueryString_2>

  linkedin?: Maybe<ContentYamlConnectionSocialLinkedinQueryString_2>

  twitter?: Maybe<ContentYamlConnectionSocialTwitterQueryString_2>
}

export interface ContentYamlConnectionSocialBitbucketQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialFacebookQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialInstagramQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialLinkedinQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionSocialTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionContactsQueryList_2 {
  elemMatch?: Maybe<ContentYamlConnectionContactsInputObject_2>
}

export interface ContentYamlConnectionContactsInputObject_2 {
  role?: Maybe<ContentYamlConnectionContactsRoleQueryString_2>

  personId?: Maybe<ContentYamlConnectionContactsPersonIdQueryString_2>
}

export interface ContentYamlConnectionContactsRoleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionContactsPersonIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ContentYamlConnectionInternalContentDigestQueryString_2>

  type?: Maybe<ContentYamlConnectionInternalTypeQueryString_2>

  owner?: Maybe<ContentYamlConnectionInternalOwnerQueryString_2>
}

export interface ContentYamlConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[]

  order?: (Maybe<MarkdownRemarkConnectionSortOrderValues>)[]
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>

  fileAbsolutePath?: Maybe<MarkdownRemarkConnectionFileAbsolutePathQueryString_2>

  fields?: Maybe<MarkdownRemarkConnectionFieldsInputObject_2>

  html?: Maybe<HtmlQueryString_4>

  excerpt?: Maybe<ExcerptQueryString_4>

  headings?: Maybe<HeadingsQueryList_4>

  timeToRead?: Maybe<TimeToReadQueryInt_4>

  tableOfContents?: Maybe<TableOfContentsQueryString_4>

  wordCount?: Maybe<WordCountTypeName_4>
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<MarkdownRemarkConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>

  fieldOwners?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersInputObject_2>
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  href?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersHrefQueryString_2>

  date?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersDateQueryString_2>
}

export interface MarkdownRemarkConnectionInternalFieldOwnersHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalFieldOwnersDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>

  type?: Maybe<MarkdownRemarkConnectionFrontmatterTypeQueryString_2>

  authors?: Maybe<MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2>

  index?: Maybe<MarkdownRemarkConnectionFrontmatterIndexQueryInteger_2>

  image?: Maybe<MarkdownRemarkConnectionFrontmatterImageQueryString_2>

  id?: Maybe<MarkdownRemarkConnectionFrontmatterIdQueryString_2>

  tagLine?: Maybe<MarkdownRemarkConnectionFrontmatterTagLineQueryString_2>

  avatar?: Maybe<MarkdownRemarkConnectionFrontmatterAvatarQueryString_2>

  phone?: Maybe<MarkdownRemarkConnectionFrontmatterPhoneQueryString_2>

  email?: Maybe<MarkdownRemarkConnectionFrontmatterEmailQueryString_2>

  social?: Maybe<MarkdownRemarkConnectionFrontmatterSocialInputObject_2>

  alumni?: Maybe<MarkdownRemarkConnectionFrontmatterAlumniQueryBoolean_2>

  href?: Maybe<MarkdownRemarkConnectionFrontmatterHrefQueryString_2>

  heading?: Maybe<MarkdownRemarkConnectionFrontmatterHeadingQueryString_2>

  lead?: Maybe<MarkdownRemarkConnectionFrontmatterLeadQueryString_2>

  section1?: Maybe<MarkdownRemarkConnectionFrontmatterSection1InputObject_2>

  section2?: Maybe<MarkdownRemarkConnectionFrontmatterSection2InputObject_2>

  images?: Maybe<MarkdownRemarkConnectionFrontmatterImagesQueryList_2>

  section3?: Maybe<MarkdownRemarkConnectionFrontmatterSection3InputObject_2>

  section4?: Maybe<MarkdownRemarkConnectionFrontmatterSection4InputObject_2>

  location?: Maybe<MarkdownRemarkConnectionFrontmatterLocationQueryString_2>

  start?: Maybe<MarkdownRemarkConnectionFrontmatterStartQueryString_2>

  end?: Maybe<MarkdownRemarkConnectionFrontmatterEndQueryString_2>

  active?: Maybe<MarkdownRemarkConnectionFrontmatterActiveQueryBoolean_2>

  schema?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaQueryList_2>

  tags?: Maybe<MarkdownRemarkConnectionFrontmatterTagsQueryList_2>
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterIndexQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterTagLineQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterAvatarQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterPhoneQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSocialInputObject_2 {
  linkedin?: Maybe<MarkdownRemarkConnectionFrontmatterSocialLinkedinQueryString_2>

  twitter?: Maybe<MarkdownRemarkConnectionFrontmatterSocialTwitterQueryString_2>

  github?: Maybe<MarkdownRemarkConnectionFrontmatterSocialGithubQueryString_2>

  keybase?: Maybe<MarkdownRemarkConnectionFrontmatterSocialKeybaseQueryString_2>

  microblog?: Maybe<MarkdownRemarkConnectionFrontmatterSocialMicroblogQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSocialLinkedinQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSocialTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSocialGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSocialKeybaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSocialMicroblogQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterAlumniQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterHeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterLeadQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection1InputObject_2 {
  heading?: Maybe<MarkdownRemarkConnectionFrontmatterSection1HeadingQueryString_2>

  content?: Maybe<MarkdownRemarkConnectionFrontmatterSection1ContentQueryString_2>

  subheading?: Maybe<MarkdownRemarkConnectionFrontmatterSection1SubheadingQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSection1HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection1ContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection1SubheadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection2InputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionFrontmatterSection2ContentQueryString_2>

  heading?: Maybe<MarkdownRemarkConnectionFrontmatterSection2HeadingQueryString_2>

  subheading?: Maybe<MarkdownRemarkConnectionFrontmatterSection2SubheadingQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSection2ContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection2HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection2SubheadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterImagesQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection3InputObject_2 {
  heading?: Maybe<MarkdownRemarkConnectionFrontmatterSection3HeadingQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSection3HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSection4InputObject_2 {
  heading?: Maybe<MarkdownRemarkConnectionFrontmatterSection4HeadingQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSection4HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterLocationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterStartQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterEndQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterActiveQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaQueryList_2 {
  elemMatch?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaInputObject_2>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaInputObject_2 {
  type?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaTypeQueryString_2>

  title?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaTitleQueryString_2>

  start?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaStartQueryString_2>

  end?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaEndQueryString_2>

  href?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaHrefQueryString_2>

  location?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaLocationInputObject_2>

  details?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaDetailsQueryString_2>

  presenters?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaPresentersQueryList_2>

  presentation?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaPresentationQueryString_2>

  winner?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaWinnerQueryBoolean_2>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaStartQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaEndQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaLocationInputObject_2 {
  coordinates?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaLocationCoordinatesQueryList_2>

  title?: Maybe<MarkdownRemarkConnectionFrontmatterSchemaLocationTitleQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaLocationCoordinatesQueryList_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaLocationTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaDetailsQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaPresentersQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaPresentationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterSchemaWinnerQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFieldsInputObject_2 {
  href?: Maybe<MarkdownRemarkConnectionFieldsHrefQueryString_2>

  date?: Maybe<MarkdownRemarkConnectionFieldsDateQueryString_2>
}

export interface MarkdownRemarkConnectionFieldsHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFieldsDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>

  sentences?: Maybe<WordCountSentencesQueryInt_4>

  words?: Maybe<WordCountWordsQueryInt_4>
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageContextInputObject {
  href?: Maybe<SitePageContextHrefQueryString>
}

export interface SitePageContextHrefQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>

  id?: Maybe<SitePagePluginCreatorIdQueryString>

  name?: Maybe<SitePagePluginCreatorNameQueryString>

  version?: Maybe<SitePagePluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>

  target?: Maybe<SitePagePluginCreatorPluginOptionsTargetQueryString>

  rel?: Maybe<SitePagePluginCreatorPluginOptionsRelQueryString>

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger>

  wrapperStyle?: Maybe<SitePagePluginCreatorPluginOptionsWrapperStyleQueryString>

  backgroundColor?: Maybe<SitePagePluginCreatorPluginOptionsBackgroundColorQueryString>

  linkImagesToOriginal?: Maybe<SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean>

  showCaptions?: Maybe<SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean>

  pathPrefix?: Maybe<SitePagePluginCreatorPluginOptionsPathPrefixQueryString>

  withWebp?: Maybe<SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean>

  classPrefix?: Maybe<SitePagePluginCreatorPluginOptionsClassPrefixQueryString>

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject>

  browserAPIs?: Maybe<SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList>

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString>
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  target?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsTargetQueryString>

  rel?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsRelQueryString>

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger>

  wrapperStyle?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString
  >

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >

  showCaptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean
  >

  pathPrefix?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString>

  withWebp?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean>

  classPrefix?: Maybe<SitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsTargetQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsRelQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsTargetQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsRelQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsClassPrefixQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesQueryList>

  peerDependencies?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesQueryList>

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>

  description?: Maybe<SitePageInternalDescriptionQueryString>

  owner?: Maybe<SitePageInternalOwnerQueryString_2>
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>

  target?: Maybe<SitePluginPluginOptionsTargetQueryString_2>

  rel?: Maybe<SitePluginPluginOptionsRelQueryString_2>

  maxWidth?: Maybe<SitePluginPluginOptionsMaxWidthQueryInteger_2>

  wrapperStyle?: Maybe<SitePluginPluginOptionsWrapperStyleQueryString_2>

  backgroundColor?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>

  linkImagesToOriginal?: Maybe<SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2>

  showCaptions?: Maybe<SitePluginPluginOptionsShowCaptionsQueryBoolean_2>

  pathPrefix?: Maybe<SitePluginPluginOptionsPathPrefixQueryString_2>

  withWebp?: Maybe<SitePluginPluginOptionsWithWebpQueryBoolean_2>

  classPrefix?: Maybe<SitePluginPluginOptionsClassPrefixQueryString_2>

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsInputObject_2>

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginPluginOptionsPluginsPluginFilepathQueryString_2>
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  target?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsTargetQueryString_2>

  rel?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsRelQueryString_2>

  maxWidth?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2>

  wrapperStyle?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2>

  backgroundColor?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2>

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >

  showCaptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2>

  pathPrefix?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2>

  withWebp?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2>

  classPrefix?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsRelQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsRelQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsClassPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginInternalTypeQueryString_2>

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>

  type?: Maybe<SiteInternalTypeQueryString_2>

  owner?: Maybe<SiteInternalOwnerQueryString_2>
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryInternalTypeQueryString_2>

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryInoQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>

  type?: Maybe<FileInternalTypeQueryString_2>

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>

  description?: Maybe<FileInternalDescriptionQueryString_2>

  owner?: Maybe<FileInternalOwnerQueryString_2>
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileInoQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>

  width?: Maybe<FixedWidthQueryFloat_3>

  height?: Maybe<FixedHeightQueryFloat_3>

  src?: Maybe<FixedSrcQueryString_3>

  srcSet?: Maybe<FixedSrcSetQueryString_3>

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>

  originalName?: Maybe<FixedOriginalNameQueryString_3>
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>

  width?: Maybe<ResolutionsWidthQueryFloat_3>

  height?: Maybe<ResolutionsHeightQueryFloat_3>

  src?: Maybe<ResolutionsSrcQueryString_3>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>

  src?: Maybe<FluidSrcQueryString_3>

  srcSet?: Maybe<FluidSrcSetQueryString_3>

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>

  sizes?: Maybe<FluidSizesQueryString_3>

  originalImg?: Maybe<FluidOriginalImgQueryString_3>

  originalName?: Maybe<FluidOriginalNameQueryString_3>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>

  src?: Maybe<SizesSrcQueryString_3>

  srcSet?: Maybe<SizesSrcSetQueryString_3>

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>

  sizes?: Maybe<SizesSizesQueryString_3>

  originalImg?: Maybe<SizesOriginalImgQueryString_3>

  originalName?: Maybe<SizesOriginalNameQueryString_3>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_3 {
  width?: Maybe<OriginalWidthQueryFloat_3>

  height?: Maybe<OriginalHeightQueryFloat_3>

  src?: Maybe<OriginalSrcQueryString_3>
}

export interface OriginalWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_3 {
  src?: Maybe<ResizeSrcQueryString_3>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>

  width?: Maybe<ResizeWidthQueryInt_3>

  height?: Maybe<ResizeHeightQueryInt_3>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>

  originalName?: Maybe<ResizeOriginalNameQueryString_3>
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobLinksInputObject_2 {
  careersite_job_url?: Maybe<TeamtailorJobLinksCareersiteJobUrlQueryString_2>

  careersite_job_apply_url?: Maybe<TeamtailorJobLinksCareersiteJobApplyUrlQueryString_2>

  careersite_job_apply_iframe_url?: Maybe<
    TeamtailorJobLinksCareersiteJobApplyIframeUrlQueryString_2
  >

  self?: Maybe<TeamtailorJobLinksSelfQueryString_2>
}

export interface TeamtailorJobLinksCareersiteJobUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobLinksCareersiteJobApplyUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobLinksCareersiteJobApplyIframeUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesInputObject_2 {
  apply_button_text?: Maybe<TeamtailorJobAttributesApplyButtonTextQueryString_2>

  body?: Maybe<TeamtailorJobAttributesBodyQueryString_2>

  human_status?: Maybe<TeamtailorJobAttributesHumanStatusQueryString_2>

  internal?: Maybe<TeamtailorJobAttributesInternalQueryBoolean_2>

  picture?: Maybe<TeamtailorJobAttributesPictureInputObject_2>

  pinned?: Maybe<TeamtailorJobAttributesPinnedQueryBoolean_2>

  status?: Maybe<TeamtailorJobAttributesStatusQueryString_2>

  title?: Maybe<TeamtailorJobAttributesTitleQueryString_2>

  external_application_url?: Maybe<TeamtailorJobAttributesExternalApplicationUrlQueryString_2>

  name_requirement?: Maybe<TeamtailorJobAttributesNameRequirementQueryString_2>

  resume_requirement?: Maybe<TeamtailorJobAttributesResumeRequirementQueryString_2>

  cover_letter_requirement?: Maybe<TeamtailorJobAttributesCoverLetterRequirementQueryString_2>

  phone_requirement?: Maybe<TeamtailorJobAttributesPhoneRequirementQueryString_2>

  created_at?: Maybe<TeamtailorJobAttributesCreatedAtQueryString_2>
}

export interface TeamtailorJobAttributesApplyButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesHumanStatusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesInternalQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface TeamtailorJobAttributesPictureInputObject_2 {
  standard?: Maybe<TeamtailorJobAttributesPictureStandardQueryString_2>

  thumb?: Maybe<TeamtailorJobAttributesPictureThumbQueryString_2>
}

export interface TeamtailorJobAttributesPictureStandardQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesPictureThumbQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesPinnedQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface TeamtailorJobAttributesStatusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesExternalApplicationUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesNameRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesResumeRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesCoverLetterRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesPhoneRequirementQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobAttributesCreatedAtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsInputObject_2 {
  department?: Maybe<TeamtailorJobRelationshipsDepartmentInputObject_2>

  role?: Maybe<TeamtailorJobRelationshipsRoleInputObject_2>

  location?: Maybe<TeamtailorJobRelationshipsLocationInputObject_2>

  user?: Maybe<TeamtailorJobRelationshipsUserInputObject_2>

  questions?: Maybe<TeamtailorJobRelationshipsQuestionsInputObject_2>

  candidates?: Maybe<TeamtailorJobRelationshipsCandidatesInputObject_2>

  stages?: Maybe<TeamtailorJobRelationshipsStagesInputObject_2>

  colleagues?: Maybe<TeamtailorJobRelationshipsColleaguesInputObject_2>

  team_memberships?: Maybe<TeamtailorJobRelationshipsTeamMembershipsInputObject_2>

  picked_questions?: Maybe<TeamtailorJobRelationshipsPickedQuestionsInputObject_2>
}

export interface TeamtailorJobRelationshipsDepartmentInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsDepartmentLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsDepartmentLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsDepartmentLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsDepartmentLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsDepartmentLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsDepartmentLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleInputObject_2 {
  data?: Maybe<TeamtailorJobRelationshipsRoleDataInputObject_2>
}

export interface TeamtailorJobRelationshipsRoleDataInputObject_2 {
  id?: Maybe<TeamtailorJobRelationshipsRoleDataIdQueryString_2>

  type?: Maybe<TeamtailorJobRelationshipsRoleDataTypeQueryString_2>

  links?: Maybe<TeamtailorJobRelationshipsRoleDataLinksInputObject_2>

  attributes?: Maybe<TeamtailorJobRelationshipsRoleDataAttributesInputObject_2>

  relationships?: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsInputObject_2>
}

export interface TeamtailorJobRelationshipsRoleDataIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleDataLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsRoleDataLinksSelfQueryString_2>
}

export interface TeamtailorJobRelationshipsRoleDataLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleDataAttributesInputObject_2 {
  name?: Maybe<TeamtailorJobRelationshipsRoleDataAttributesNameQueryString_2>
}

export interface TeamtailorJobRelationshipsRoleDataAttributesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleDataRelationshipsInputObject_2 {
  department?: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentInputObject_2>
}

export interface TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksSelfQueryString_2>

  related?: Maybe<
    TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksRelatedQueryString_2
  >
}

export interface TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsRoleDataRelationshipsDepartmentLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsLocationInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsLocationLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsLocationLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsLocationLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsLocationLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsLocationLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsLocationLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsUserInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsUserLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsUserLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsUserLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsUserLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsUserLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsUserLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsQuestionsInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsQuestionsLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsQuestionsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsQuestionsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsQuestionsLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsQuestionsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsQuestionsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsCandidatesInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsCandidatesLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsCandidatesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsCandidatesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsCandidatesLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsCandidatesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsCandidatesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsStagesInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsStagesLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsStagesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsStagesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsStagesLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsStagesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsStagesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsColleaguesInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsColleaguesLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsColleaguesLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsColleaguesLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsColleaguesLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsColleaguesLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsColleaguesLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsTeamMembershipsInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsTeamMembershipsLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsTeamMembershipsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsTeamMembershipsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsTeamMembershipsLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsTeamMembershipsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsTeamMembershipsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsPickedQuestionsInputObject_2 {
  links?: Maybe<TeamtailorJobRelationshipsPickedQuestionsLinksInputObject_2>
}

export interface TeamtailorJobRelationshipsPickedQuestionsLinksInputObject_2 {
  self?: Maybe<TeamtailorJobRelationshipsPickedQuestionsLinksSelfQueryString_2>

  related?: Maybe<TeamtailorJobRelationshipsPickedQuestionsLinksRelatedQueryString_2>
}

export interface TeamtailorJobRelationshipsPickedQuestionsLinksSelfQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobRelationshipsPickedQuestionsLinksRelatedQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobInternalInputObject_2 {
  type?: Maybe<TeamtailorJobInternalTypeQueryString_2>

  content?: Maybe<TeamtailorJobInternalContentQueryString_2>

  contentDigest?: Maybe<TeamtailorJobInternalContentDigestQueryString_2>

  owner?: Maybe<TeamtailorJobInternalOwnerQueryString_2>

  fieldOwners?: Maybe<TeamtailorJobInternalFieldOwnersInputObject_2>
}

export interface TeamtailorJobInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobInternalFieldOwnersInputObject_2 {
  href?: Maybe<TeamtailorJobInternalFieldOwnersHrefQueryString_2>
}

export interface TeamtailorJobInternalFieldOwnersHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface TeamtailorJobFieldsInputObject_2 {
  href?: Maybe<TeamtailorJobFieldsHrefQueryString_2>
}

export interface TeamtailorJobFieldsHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlAddressInputObject_2 {
  street?: Maybe<ContentYamlAddressStreetQueryString_2>

  postalCode?: Maybe<ContentYamlAddressPostalCodeQueryString_2>

  city?: Maybe<ContentYamlAddressCityQueryString_2>
}

export interface ContentYamlAddressStreetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlAddressPostalCodeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlAddressCityQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlCoordinatesQueryList_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ContentYamlEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlPhoneQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialInputObject_2 {
  bitbucket?: Maybe<ContentYamlSocialBitbucketQueryString_2>

  facebook?: Maybe<ContentYamlSocialFacebookQueryString_2>

  github?: Maybe<ContentYamlSocialGithubQueryString_2>

  instagram?: Maybe<ContentYamlSocialInstagramQueryString_2>

  linkedin?: Maybe<ContentYamlSocialLinkedinQueryString_2>

  twitter?: Maybe<ContentYamlSocialTwitterQueryString_2>
}

export interface ContentYamlSocialBitbucketQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialFacebookQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialInstagramQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialLinkedinQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlSocialTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlContactsQueryList_2 {
  elemMatch?: Maybe<ContentYamlContactsInputObject_2>
}

export interface ContentYamlContactsInputObject_2 {
  role?: Maybe<ContentYamlContactsRoleQueryString_2>

  personId?: Maybe<ContentYamlContactsPersonIdQueryString_2>
}

export interface ContentYamlContactsRoleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlContactsPersonIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlInternalInputObject_2 {
  contentDigest?: Maybe<ContentYamlInternalContentDigestQueryString_2>

  type?: Maybe<ContentYamlInternalTypeQueryString_2>

  owner?: Maybe<ContentYamlInternalOwnerQueryString_2>
}

export interface ContentYamlInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ContentYamlInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>

  fieldOwners?: Maybe<MarkdownRemarkInternalFieldOwnersInputObject_2>
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
  href?: Maybe<MarkdownRemarkInternalFieldOwnersHrefQueryString_2>

  date?: Maybe<MarkdownRemarkInternalFieldOwnersDateQueryString_2>
}

export interface MarkdownRemarkInternalFieldOwnersHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalFieldOwnersDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>

  type?: Maybe<MarkdownRemarkFrontmatterTypeQueryString_2>

  authors?: Maybe<MarkdownRemarkFrontmatterAuthorsQueryList_2>

  index?: Maybe<MarkdownRemarkFrontmatterIndexQueryInteger_2>

  image?: Maybe<MarkdownRemarkFrontmatterImageQueryString_2>

  id?: Maybe<MarkdownRemarkFrontmatterIdQueryString_2>

  tagLine?: Maybe<MarkdownRemarkFrontmatterTagLineQueryString_2>

  avatar?: Maybe<MarkdownRemarkFrontmatterAvatarQueryString_2>

  phone?: Maybe<MarkdownRemarkFrontmatterPhoneQueryString_2>

  email?: Maybe<MarkdownRemarkFrontmatterEmailQueryString_2>

  social?: Maybe<MarkdownRemarkFrontmatterSocialInputObject_2>

  alumni?: Maybe<MarkdownRemarkFrontmatterAlumniQueryBoolean_2>

  href?: Maybe<MarkdownRemarkFrontmatterHrefQueryString_2>

  heading?: Maybe<MarkdownRemarkFrontmatterHeadingQueryString_2>

  lead?: Maybe<MarkdownRemarkFrontmatterLeadQueryString_2>

  section1?: Maybe<MarkdownRemarkFrontmatterSection1InputObject_2>

  section2?: Maybe<MarkdownRemarkFrontmatterSection2InputObject_2>

  images?: Maybe<MarkdownRemarkFrontmatterImagesQueryList_2>

  section3?: Maybe<MarkdownRemarkFrontmatterSection3InputObject_2>

  section4?: Maybe<MarkdownRemarkFrontmatterSection4InputObject_2>

  location?: Maybe<MarkdownRemarkFrontmatterLocationQueryString_2>

  start?: Maybe<MarkdownRemarkFrontmatterStartQueryString_2>

  end?: Maybe<MarkdownRemarkFrontmatterEndQueryString_2>

  active?: Maybe<MarkdownRemarkFrontmatterActiveQueryBoolean_2>

  schema?: Maybe<MarkdownRemarkFrontmatterSchemaQueryList_2>

  tags?: Maybe<MarkdownRemarkFrontmatterTagsQueryList_2>
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterAuthorsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterIndexQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface MarkdownRemarkFrontmatterImageQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterTagLineQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterAvatarQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterPhoneQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSocialInputObject_2 {
  linkedin?: Maybe<MarkdownRemarkFrontmatterSocialLinkedinQueryString_2>

  twitter?: Maybe<MarkdownRemarkFrontmatterSocialTwitterQueryString_2>

  github?: Maybe<MarkdownRemarkFrontmatterSocialGithubQueryString_2>

  keybase?: Maybe<MarkdownRemarkFrontmatterSocialKeybaseQueryString_2>

  microblog?: Maybe<MarkdownRemarkFrontmatterSocialMicroblogQueryString_2>
}

export interface MarkdownRemarkFrontmatterSocialLinkedinQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSocialTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSocialGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSocialKeybaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSocialMicroblogQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterAlumniQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkFrontmatterHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterHeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterLeadQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection1InputObject_2 {
  heading?: Maybe<MarkdownRemarkFrontmatterSection1HeadingQueryString_2>

  content?: Maybe<MarkdownRemarkFrontmatterSection1ContentQueryString_2>

  subheading?: Maybe<MarkdownRemarkFrontmatterSection1SubheadingQueryString_2>
}

export interface MarkdownRemarkFrontmatterSection1HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection1ContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection1SubheadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection2InputObject_2 {
  content?: Maybe<MarkdownRemarkFrontmatterSection2ContentQueryString_2>

  heading?: Maybe<MarkdownRemarkFrontmatterSection2HeadingQueryString_2>

  subheading?: Maybe<MarkdownRemarkFrontmatterSection2SubheadingQueryString_2>
}

export interface MarkdownRemarkFrontmatterSection2ContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection2HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection2SubheadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterImagesQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection3InputObject_2 {
  heading?: Maybe<MarkdownRemarkFrontmatterSection3HeadingQueryString_2>
}

export interface MarkdownRemarkFrontmatterSection3HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSection4InputObject_2 {
  heading?: Maybe<MarkdownRemarkFrontmatterSection4HeadingQueryString_2>
}

export interface MarkdownRemarkFrontmatterSection4HeadingQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterLocationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterStartQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterEndQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterActiveQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaQueryList_2 {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSchemaInputObject_2>
}

export interface MarkdownRemarkFrontmatterSchemaInputObject_2 {
  type?: Maybe<MarkdownRemarkFrontmatterSchemaTypeQueryString_2>

  title?: Maybe<MarkdownRemarkFrontmatterSchemaTitleQueryString_2>

  start?: Maybe<MarkdownRemarkFrontmatterSchemaStartQueryString_2>

  end?: Maybe<MarkdownRemarkFrontmatterSchemaEndQueryString_2>

  href?: Maybe<MarkdownRemarkFrontmatterSchemaHrefQueryString_2>

  location?: Maybe<MarkdownRemarkFrontmatterSchemaLocationInputObject_2>

  details?: Maybe<MarkdownRemarkFrontmatterSchemaDetailsQueryString_2>

  presenters?: Maybe<MarkdownRemarkFrontmatterSchemaPresentersQueryList_2>

  presentation?: Maybe<MarkdownRemarkFrontmatterSchemaPresentationQueryString_2>

  winner?: Maybe<MarkdownRemarkFrontmatterSchemaWinnerQueryBoolean_2>
}

export interface MarkdownRemarkFrontmatterSchemaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaStartQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaEndQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaLocationInputObject_2 {
  coordinates?: Maybe<MarkdownRemarkFrontmatterSchemaLocationCoordinatesQueryList_2>

  title?: Maybe<MarkdownRemarkFrontmatterSchemaLocationTitleQueryString_2>
}

export interface MarkdownRemarkFrontmatterSchemaLocationCoordinatesQueryList_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaLocationTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaDetailsQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaPresentersQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaPresentationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterSchemaWinnerQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MarkdownRemarkFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFieldsInputObject_2 {
  href?: Maybe<MarkdownRemarkFieldsHrefQueryString_2>

  date?: Maybe<MarkdownRemarkFieldsDateQueryString_2>
}

export interface MarkdownRemarkFieldsHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFieldsDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>

  sentences?: Maybe<WordCountSentencesQueryInt_3>

  words?: Maybe<WordCountWordsQueryInt_3>
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextHref = "context___href",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum SitePageConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum SitePageDistinctEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextHref = "context___href",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum SitePageGroupEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextHref = "context___href",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsTarget = "pluginOptions___target",
  PluginOptionsRel = "pluginOptions___rel",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsWrapperStyle = "pluginOptions___wrapperStyle",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsShowCaptions = "pluginOptions___showCaptions",
  PluginOptionsPathPrefix = "pluginOptions___pathPrefix",
  PluginOptionsWithWebp = "pluginOptions___withWebp",
  PluginOptionsClassPrefix = "pluginOptions___classPrefix",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum SitePluginConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum SitePluginDistinctEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsTarget = "pluginOptions___target",
  PluginOptionsRel = "pluginOptions___rel",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsWrapperStyle = "pluginOptions___wrapperStyle",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsShowCaptions = "pluginOptions___showCaptions",
  PluginOptionsPathPrefix = "pluginOptions___pathPrefix",
  PluginOptionsWithWebp = "pluginOptions___withWebp",
  PluginOptionsClassPrefix = "pluginOptions___classPrefix",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum SitePluginGroupEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsTarget = "pluginOptions___target",
  PluginOptionsRel = "pluginOptions___rel",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsWrapperStyle = "pluginOptions___wrapperStyle",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsShowCaptions = "pluginOptions___showCaptions",
  PluginOptionsPathPrefix = "pluginOptions___pathPrefix",
  PluginOptionsWithWebp = "pluginOptions___withWebp",
  PluginOptionsClassPrefix = "pluginOptions___classPrefix",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = "id",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export enum DirectoryConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum DirectoryDistinctEnum {
  Id = "id",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export enum DirectoryGroupEnum {
  Id = "id",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export enum FileConnectionSortByFieldsEnum {
  Id = "id",
  Children = "children",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  PublicUrl = "publicURL"
}

export enum FileConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY"
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export enum ImageCropFocus {
  Center = "CENTER",
  North = "NORTH",
  Northeast = "NORTHEAST",
  East = "EAST",
  Southeast = "SOUTHEAST",
  South = "SOUTH",
  Southwest = "SOUTHWEST",
  West = "WEST",
  Northwest = "NORTHWEST",
  Entropy = "ENTROPY",
  Attention = "ATTENTION"
}

export enum ExcerptFormats {
  Plain = "PLAIN",
  Html = "HTML"
}

export enum HeadingLevels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6"
}

export enum FileDistinctEnum {
  Id = "id",
  Children = "children",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export enum FileGroupEnum {
  Id = "id",
  Children = "children",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedOriginalName = "fixed___originalName",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsOriginalName = "resolutions___originalName",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidPresentationHeight = "fluid___presentationHeight",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesPresentationHeight = "sizes___presentationHeight",
  OriginalWidth = "original___width",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeOriginalName = "resize___originalName"
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum ImageSharpDistinctEnum {
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum ImageSharpGroupEnum {
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum TeamtailorJobConnectionSortByFieldsEnum {
  Id = "id",
  Type = "type",
  LinksCareersiteJobUrl = "links___careersite_job_url",
  LinksCareersiteJobApplyUrl = "links___careersite_job_apply_url",
  LinksCareersiteJobApplyIframeUrl = "links___careersite_job_apply_iframe_url",
  LinksSelf = "links___self",
  AttributesApplyButtonText = "attributes___apply_button_text",
  AttributesBody = "attributes___body",
  AttributesHumanStatus = "attributes___human_status",
  AttributesInternal = "attributes___internal",
  AttributesPictureStandard = "attributes___picture___standard",
  AttributesPictureThumb = "attributes___picture___thumb",
  AttributesPinned = "attributes___pinned",
  AttributesStatus = "attributes___status",
  AttributesTitle = "attributes___title",
  AttributesExternalApplicationUrl = "attributes___external_application_url",
  AttributesNameRequirement = "attributes___name_requirement",
  AttributesResumeRequirement = "attributes___resume_requirement",
  AttributesCoverLetterRequirement = "attributes___cover_letter_requirement",
  AttributesPhoneRequirement = "attributes___phone_requirement",
  AttributesCreatedAt = "attributes___created_at",
  RelationshipsDepartmentLinks = "relationships___department___links",
  RelationshipsRoleData = "relationships___role___data",
  RelationshipsLocationLinks = "relationships___location___links",
  RelationshipsUserLinks = "relationships___user___links",
  RelationshipsQuestionsLinks = "relationships___questions___links",
  RelationshipsCandidatesLinks = "relationships___candidates___links",
  RelationshipsStagesLinks = "relationships___stages___links",
  RelationshipsColleaguesLinks = "relationships___colleagues___links",
  RelationshipsTeamMembershipsLinks = "relationships___team_memberships___links",
  RelationshipsPickedQuestionsLinks = "relationships___picked_questions___links",
  InternalType = "internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  FieldsHref = "fields___href"
}

export enum TeamtailorJobConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum TeamtailorJobDistinctEnum {
  Id = "id",
  Type = "type",
  LinksCareersiteJobUrl = "links___careersite_job_url",
  LinksCareersiteJobApplyUrl = "links___careersite_job_apply_url",
  LinksCareersiteJobApplyIframeUrl = "links___careersite_job_apply_iframe_url",
  LinksSelf = "links___self",
  AttributesApplyButtonText = "attributes___apply_button_text",
  AttributesBody = "attributes___body",
  AttributesHumanStatus = "attributes___human_status",
  AttributesInternal = "attributes___internal",
  AttributesPictureStandard = "attributes___picture___standard",
  AttributesPictureThumb = "attributes___picture___thumb",
  AttributesPinned = "attributes___pinned",
  AttributesStatus = "attributes___status",
  AttributesTitle = "attributes___title",
  AttributesExternalApplicationUrl = "attributes___external_application_url",
  AttributesNameRequirement = "attributes___name_requirement",
  AttributesResumeRequirement = "attributes___resume_requirement",
  AttributesCoverLetterRequirement = "attributes___cover_letter_requirement",
  AttributesPhoneRequirement = "attributes___phone_requirement",
  AttributesCreatedAt = "attributes___created_at",
  RelationshipsDepartmentLinks = "relationships___department___links",
  RelationshipsRoleData = "relationships___role___data",
  RelationshipsLocationLinks = "relationships___location___links",
  RelationshipsUserLinks = "relationships___user___links",
  RelationshipsQuestionsLinks = "relationships___questions___links",
  RelationshipsCandidatesLinks = "relationships___candidates___links",
  RelationshipsStagesLinks = "relationships___stages___links",
  RelationshipsColleaguesLinks = "relationships___colleagues___links",
  RelationshipsTeamMembershipsLinks = "relationships___team_memberships___links",
  RelationshipsPickedQuestionsLinks = "relationships___picked_questions___links",
  InternalType = "internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  FieldsHref = "fields___href"
}

export enum TeamtailorJobGroupEnum {
  Id = "id",
  Type = "type",
  LinksCareersiteJobUrl = "links___careersite_job_url",
  LinksCareersiteJobApplyUrl = "links___careersite_job_apply_url",
  LinksCareersiteJobApplyIframeUrl = "links___careersite_job_apply_iframe_url",
  LinksSelf = "links___self",
  AttributesApplyButtonText = "attributes___apply_button_text",
  AttributesBody = "attributes___body",
  AttributesHumanStatus = "attributes___human_status",
  AttributesInternal = "attributes___internal",
  AttributesPictureStandard = "attributes___picture___standard",
  AttributesPictureThumb = "attributes___picture___thumb",
  AttributesPinned = "attributes___pinned",
  AttributesStatus = "attributes___status",
  AttributesTitle = "attributes___title",
  AttributesExternalApplicationUrl = "attributes___external_application_url",
  AttributesNameRequirement = "attributes___name_requirement",
  AttributesResumeRequirement = "attributes___resume_requirement",
  AttributesCoverLetterRequirement = "attributes___cover_letter_requirement",
  AttributesPhoneRequirement = "attributes___phone_requirement",
  AttributesCreatedAt = "attributes___created_at",
  RelationshipsDepartmentLinks = "relationships___department___links",
  RelationshipsRoleData = "relationships___role___data",
  RelationshipsLocationLinks = "relationships___location___links",
  RelationshipsUserLinks = "relationships___user___links",
  RelationshipsQuestionsLinks = "relationships___questions___links",
  RelationshipsCandidatesLinks = "relationships___candidates___links",
  RelationshipsStagesLinks = "relationships___stages___links",
  RelationshipsColleaguesLinks = "relationships___colleagues___links",
  RelationshipsTeamMembershipsLinks = "relationships___team_memberships___links",
  RelationshipsPickedQuestionsLinks = "relationships___picked_questions___links",
  InternalType = "internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  FieldsHref = "fields___href"
}

export enum ContentYamlConnectionSortByFieldsEnum {
  Name = "name",
  AddressStreet = "address___street",
  AddressPostalCode = "address___postalCode",
  AddressCity = "address___city",
  Coordinates = "coordinates",
  Email = "email",
  Phone = "phone",
  SocialBitbucket = "social___bitbucket",
  SocialFacebook = "social___facebook",
  SocialGithub = "social___github",
  SocialInstagram = "social___instagram",
  SocialLinkedin = "social___linkedin",
  SocialTwitter = "social___twitter",
  Contacts = "contacts",
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum ContentYamlConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum ContentYamlDistinctEnum {
  Name = "name",
  AddressStreet = "address___street",
  AddressPostalCode = "address___postalCode",
  AddressCity = "address___city",
  Coordinates = "coordinates",
  Email = "email",
  Phone = "phone",
  SocialBitbucket = "social___bitbucket",
  SocialFacebook = "social___facebook",
  SocialGithub = "social___github",
  SocialInstagram = "social___instagram",
  SocialLinkedin = "social___linkedin",
  SocialTwitter = "social___twitter",
  Contacts = "contacts",
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum ContentYamlGroupEnum {
  Name = "name",
  AddressStreet = "address___street",
  AddressPostalCode = "address___postalCode",
  AddressCity = "address___city",
  Coordinates = "coordinates",
  Email = "email",
  Phone = "phone",
  SocialBitbucket = "social___bitbucket",
  SocialFacebook = "social___facebook",
  SocialGithub = "social___github",
  SocialInstagram = "social___instagram",
  SocialLinkedin = "social___linkedin",
  SocialTwitter = "social___twitter",
  Contacts = "contacts",
  Id = "id",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  InternalFieldOwnersDate = "internal___fieldOwners___date",
  FrontmatterTitle = "frontmatter___title",
  FrontmatterType = "frontmatter___type",
  FrontmatterAuthors = "frontmatter___authors",
  FrontmatterIndex = "frontmatter___index",
  FrontmatterImage = "frontmatter___image",
  FrontmatterId = "frontmatter___id",
  FrontmatterTagLine = "frontmatter___tagLine",
  FrontmatterAvatar = "frontmatter___avatar",
  FrontmatterPhone = "frontmatter___phone",
  FrontmatterEmail = "frontmatter___email",
  FrontmatterSocialLinkedin = "frontmatter___social___linkedin",
  FrontmatterSocialTwitter = "frontmatter___social___twitter",
  FrontmatterSocialGithub = "frontmatter___social___github",
  FrontmatterSocialKeybase = "frontmatter___social___keybase",
  FrontmatterSocialMicroblog = "frontmatter___social___microblog",
  FrontmatterAlumni = "frontmatter___alumni",
  FrontmatterHref = "frontmatter___href",
  FrontmatterHeading = "frontmatter___heading",
  FrontmatterLead = "frontmatter___lead",
  FrontmatterSection1Heading = "frontmatter___section1___heading",
  FrontmatterSection1Content = "frontmatter___section1___content",
  FrontmatterSection1Subheading = "frontmatter___section1___subheading",
  FrontmatterSection2Content = "frontmatter___section2___content",
  FrontmatterSection2Heading = "frontmatter___section2___heading",
  FrontmatterSection2Subheading = "frontmatter___section2___subheading",
  FrontmatterImages = "frontmatter___images",
  FrontmatterSection3Heading = "frontmatter___section3___heading",
  FrontmatterSection4Heading = "frontmatter___section4___heading",
  FrontmatterLocation = "frontmatter___location",
  FrontmatterStart = "frontmatter___start",
  FrontmatterEnd = "frontmatter___end",
  FrontmatterActive = "frontmatter___active",
  FrontmatterSchema = "frontmatter___schema",
  FrontmatterTags = "frontmatter___tags",
  RawMarkdownBody = "rawMarkdownBody",
  FileAbsolutePath = "fileAbsolutePath",
  FieldsHref = "fields___href",
  FieldsDate = "fields___date",
  Html = "html",
  Excerpt = "excerpt",
  Headings = "headings",
  TimeToRead = "timeToRead",
  TableOfContents = "tableOfContents",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words"
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum MarkdownRemarkDistinctEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  InternalFieldOwnersDate = "internal___fieldOwners___date",
  FrontmatterTitle = "frontmatter___title",
  FrontmatterType = "frontmatter___type",
  FrontmatterAuthors = "frontmatter___authors",
  FrontmatterIndex = "frontmatter___index",
  FrontmatterImage = "frontmatter___image",
  FrontmatterId = "frontmatter___id",
  FrontmatterTagLine = "frontmatter___tagLine",
  FrontmatterAvatar = "frontmatter___avatar",
  FrontmatterPhone = "frontmatter___phone",
  FrontmatterEmail = "frontmatter___email",
  FrontmatterSocialLinkedin = "frontmatter___social___linkedin",
  FrontmatterSocialTwitter = "frontmatter___social___twitter",
  FrontmatterSocialGithub = "frontmatter___social___github",
  FrontmatterSocialKeybase = "frontmatter___social___keybase",
  FrontmatterSocialMicroblog = "frontmatter___social___microblog",
  FrontmatterAlumni = "frontmatter___alumni",
  FrontmatterHref = "frontmatter___href",
  FrontmatterHeading = "frontmatter___heading",
  FrontmatterLead = "frontmatter___lead",
  FrontmatterSection1Heading = "frontmatter___section1___heading",
  FrontmatterSection1Content = "frontmatter___section1___content",
  FrontmatterSection1Subheading = "frontmatter___section1___subheading",
  FrontmatterSection2Content = "frontmatter___section2___content",
  FrontmatterSection2Heading = "frontmatter___section2___heading",
  FrontmatterSection2Subheading = "frontmatter___section2___subheading",
  FrontmatterImages = "frontmatter___images",
  FrontmatterSection3Heading = "frontmatter___section3___heading",
  FrontmatterSection4Heading = "frontmatter___section4___heading",
  FrontmatterLocation = "frontmatter___location",
  FrontmatterStart = "frontmatter___start",
  FrontmatterEnd = "frontmatter___end",
  FrontmatterActive = "frontmatter___active",
  FrontmatterSchema = "frontmatter___schema",
  FrontmatterTags = "frontmatter___tags",
  RawMarkdownBody = "rawMarkdownBody",
  FileAbsolutePath = "fileAbsolutePath",
  FieldsHref = "fields___href",
  FieldsDate = "fields___date"
}

export enum MarkdownRemarkGroupEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  InternalFieldOwnersHref = "internal___fieldOwners___href",
  InternalFieldOwnersDate = "internal___fieldOwners___date",
  FrontmatterTitle = "frontmatter___title",
  FrontmatterType = "frontmatter___type",
  FrontmatterAuthors = "frontmatter___authors",
  FrontmatterIndex = "frontmatter___index",
  FrontmatterImage = "frontmatter___image",
  FrontmatterId = "frontmatter___id",
  FrontmatterTagLine = "frontmatter___tagLine",
  FrontmatterAvatar = "frontmatter___avatar",
  FrontmatterPhone = "frontmatter___phone",
  FrontmatterEmail = "frontmatter___email",
  FrontmatterSocialLinkedin = "frontmatter___social___linkedin",
  FrontmatterSocialTwitter = "frontmatter___social___twitter",
  FrontmatterSocialGithub = "frontmatter___social___github",
  FrontmatterSocialKeybase = "frontmatter___social___keybase",
  FrontmatterSocialMicroblog = "frontmatter___social___microblog",
  FrontmatterAlumni = "frontmatter___alumni",
  FrontmatterHref = "frontmatter___href",
  FrontmatterHeading = "frontmatter___heading",
  FrontmatterLead = "frontmatter___lead",
  FrontmatterSection1Heading = "frontmatter___section1___heading",
  FrontmatterSection1Content = "frontmatter___section1___content",
  FrontmatterSection1Subheading = "frontmatter___section1___subheading",
  FrontmatterSection2Content = "frontmatter___section2___content",
  FrontmatterSection2Heading = "frontmatter___section2___heading",
  FrontmatterSection2Subheading = "frontmatter___section2___subheading",
  FrontmatterImages = "frontmatter___images",
  FrontmatterSection3Heading = "frontmatter___section3___heading",
  FrontmatterSection4Heading = "frontmatter___section4___heading",
  FrontmatterLocation = "frontmatter___location",
  FrontmatterStart = "frontmatter___start",
  FrontmatterEnd = "frontmatter___end",
  FrontmatterActive = "frontmatter___active",
  FrontmatterSchema = "frontmatter___schema",
  FrontmatterTags = "frontmatter___tags",
  RawMarkdownBody = "rawMarkdownBody",
  FileAbsolutePath = "fileAbsolutePath",
  FieldsHref = "fields___href",
  FieldsDate = "fields___date"
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>
  /** Connection to all TeamtailorJob nodes */
  allTeamtailorJob?: Maybe<TeamtailorJobConnection>
  /** Connection to all ContentYaml nodes */
  allContentYaml?: Maybe<ContentYamlConnection>
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>

  sitePage?: Maybe<SitePage>

  sitePlugin?: Maybe<SitePlugin>

  site?: Maybe<Site>

  directory?: Maybe<Directory>

  file?: Maybe<File>

  imageSharp?: Maybe<ImageSharp>

  teamtailorJob?: Maybe<TeamtailorJob>

  contentYaml?: Maybe<ContentYaml>

  markdownRemark?: Maybe<MarkdownRemark>
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  jsonName?: Maybe<string>

  internalComponentName?: Maybe<string>

  path?: Maybe<string>

  component?: Maybe<string>

  componentChunkName?: Maybe<string>

  context?: Maybe<Context>

  pluginCreator?: Maybe<SitePlugin>

  pluginCreatorId?: Maybe<string>

  componentPath?: Maybe<string>

  internal?: Maybe<Internal_10>
}

export interface Context {
  href?: Maybe<string>
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  resolve?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<PluginOptions_3>

  nodeAPIs?: Maybe<(Maybe<string>)[]>

  browserAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>

  packageJson?: Maybe<PackageJson_2>

  internal?: Maybe<Internal_11>
}

export interface PluginOptions_3 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>

  name?: Maybe<string>

  path?: Maybe<string>

  target?: Maybe<string>

  rel?: Maybe<string>

  maxWidth?: Maybe<number>

  wrapperStyle?: Maybe<string>

  backgroundColor?: Maybe<string>

  linkImagesToOriginal?: Maybe<boolean>

  showCaptions?: Maybe<boolean>

  pathPrefix?: Maybe<string>

  withWebp?: Maybe<boolean>

  classPrefix?: Maybe<string>

  pathCheck?: Maybe<boolean>
}

export interface Plugins_2 {
  resolve?: Maybe<string>

  id?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<PluginOptions_4>

  browserAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>
}

export interface PluginOptions_4 {
  target?: Maybe<string>

  rel?: Maybe<string>

  maxWidth?: Maybe<number>

  wrapperStyle?: Maybe<string>

  backgroundColor?: Maybe<string>

  linkImagesToOriginal?: Maybe<boolean>

  showCaptions?: Maybe<boolean>

  pathPrefix?: Maybe<string>

  withWebp?: Maybe<boolean>

  classPrefix?: Maybe<string>
}

export interface PackageJson_2 {
  name?: Maybe<string>

  description?: Maybe<string>

  version?: Maybe<string>

  main?: Maybe<string>

  author?: Maybe<string>

  license?: Maybe<string>

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>

  keywords?: Maybe<(Maybe<string>)[]>
}

export interface Dependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface DevDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface PeerDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface Internal_11 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface Internal_10 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_12>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
}

export interface Internal_12 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  /** The child of this node of type contentYaml */
  childContentYaml?: Maybe<ContentYaml>

  internal?: Maybe<Internal_13>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>
}

/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_14>

  fixed?: Maybe<ImageSharpFixed>

  resolutions?: Maybe<ImageSharpResolutions>

  fluid?: Maybe<ImageSharpFluid>

  sizes?: Maybe<ImageSharpSizes>

  original?: Maybe<ImageSharpOriginal>

  resize?: Maybe<ImageSharpResize>
}

export interface Internal_14 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface ImageSharpFixed {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpFluid {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpSizes {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpOriginal {
  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>
}

export interface ImageSharpResize {
  src?: Maybe<string>

  tracedSVG?: Maybe<string>

  width?: Maybe<number>

  height?: Maybe<number>

  aspectRatio?: Maybe<number>

  originalName?: Maybe<string>
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_15>

  frontmatter?: Maybe<Frontmatter_2>

  rawMarkdownBody?: Maybe<string>

  fileAbsolutePath?: Maybe<string>

  fields?: Maybe<Fields_3>

  html?: Maybe<string>

  htmlAst?: Maybe<Json>

  excerpt?: Maybe<string>

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>

  timeToRead?: Maybe<number>

  tableOfContents?: Maybe<string>

  wordCount?: Maybe<WordCount>
}

export interface Internal_15 {
  content?: Maybe<string>

  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>

  fieldOwners?: Maybe<FieldOwners_3>
}

export interface FieldOwners_3 {
  href?: Maybe<string>

  date?: Maybe<string>
}

export interface Frontmatter_2 {
  title?: Maybe<string>

  type?: Maybe<string>

  authors?: Maybe<(Maybe<string>)[]>

  index?: Maybe<number>

  image?: Maybe<string>

  id?: Maybe<string>

  tagLine?: Maybe<string>

  avatar?: Maybe<string>

  phone?: Maybe<string>

  email?: Maybe<string>

  social?: Maybe<Social_3>

  alumni?: Maybe<boolean>

  href?: Maybe<string>

  heading?: Maybe<string>

  lead?: Maybe<string>

  section1?: Maybe<Section1_2>

  section2?: Maybe<Section2_2>

  images?: Maybe<(Maybe<string>)[]>

  section3?: Maybe<Section3_2>

  section4?: Maybe<Section4_2>

  location?: Maybe<string>

  start?: Maybe<Date>

  end?: Maybe<Date>

  active?: Maybe<boolean>

  schema?: Maybe<(Maybe<Schema_2>)[]>

  tags?: Maybe<(Maybe<string>)[]>
}

export interface Social_3 {
  linkedin?: Maybe<string>

  twitter?: Maybe<string>

  github?: Maybe<string>

  keybase?: Maybe<string>

  microblog?: Maybe<string>
}

export interface Section1_2 {
  heading?: Maybe<string>

  content?: Maybe<string>

  subheading?: Maybe<string>
}

export interface Section2_2 {
  content?: Maybe<string>

  heading?: Maybe<string>

  subheading?: Maybe<string>
}

export interface Section3_2 {
  heading?: Maybe<string>
}

export interface Section4_2 {
  heading?: Maybe<string>
}

export interface Schema_2 {
  type?: Maybe<string>

  title?: Maybe<string>

  start?: Maybe<string>

  end?: Maybe<string>

  href?: Maybe<string>

  location?: Maybe<Location_3>

  details?: Maybe<string>

  presenters?: Maybe<(Maybe<string>)[]>

  presentation?: Maybe<string>

  winner?: Maybe<boolean>
}

export interface Location_3 {
  coordinates?: Maybe<(Maybe<number>)[]>

  title?: Maybe<string>
}

export interface Fields_3 {
  href?: Maybe<string>

  date?: Maybe<Date>
}

export interface MarkdownHeading {
  value?: Maybe<string>

  depth?: Maybe<number>
}

export interface WordCount {
  paragraphs?: Maybe<number>

  sentences?: Maybe<number>

  words?: Maybe<number>
}

/** Node of type ContentYaml */
export interface ContentYaml extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  name?: Maybe<string>

  address?: Maybe<Address_2>

  coordinates?: Maybe<(Maybe<number>)[]>

  email?: Maybe<string>

  phone?: Maybe<string>

  social?: Maybe<Social_4>

  contacts?: Maybe<(Maybe<Contacts_2>)[]>

  internal?: Maybe<Internal_16>
}

export interface Address_2 {
  street?: Maybe<string>

  postalCode?: Maybe<string>

  city?: Maybe<string>
}

export interface Social_4 {
  bitbucket?: Maybe<string>

  facebook?: Maybe<string>

  github?: Maybe<string>

  instagram?: Maybe<string>

  linkedin?: Maybe<string>

  twitter?: Maybe<string>
}

export interface Contacts_2 {
  role?: Maybe<string>

  personId?: Maybe<string>
}

export interface Internal_16 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface Internal_13 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  mediaType?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** A connection to a list of items. */
export interface ImageSharpConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<ImageSharpGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface ImageSharpEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface TeamtailorJobConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<TeamtailorJobEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<TeamtailorJobGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface TeamtailorJobEdge {
  /** The item at the end of the edge */
  node?: Maybe<TeamtailorJob>
  /** The next edge in the connection */
  next?: Maybe<TeamtailorJob>
  /** The previous edge in the connection */
  previous?: Maybe<TeamtailorJob>
}

/** Node of type TeamtailorJob */
export interface TeamtailorJob extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  links?: Maybe<Links_13>

  attributes?: Maybe<Attributes_3>

  relationships?: Maybe<Relationships_3>

  internal?: Maybe<Internal_17>

  fields?: Maybe<Fields_4>
}

export interface Links_13 {
  careersite_job_url?: Maybe<string>

  careersite_job_apply_url?: Maybe<string>

  careersite_job_apply_iframe_url?: Maybe<string>

  self?: Maybe<string>
}

export interface Attributes_3 {
  apply_button_text?: Maybe<string>

  body?: Maybe<string>

  human_status?: Maybe<string>

  internal?: Maybe<boolean>

  picture?: Maybe<Picture_2>

  pinned?: Maybe<boolean>

  status?: Maybe<string>

  title?: Maybe<string>

  external_application_url?: Maybe<string>

  name_requirement?: Maybe<string>

  resume_requirement?: Maybe<string>

  cover_letter_requirement?: Maybe<string>

  phone_requirement?: Maybe<string>

  created_at?: Maybe<Date>
}

export interface Picture_2 {
  standard?: Maybe<string>

  thumb?: Maybe<string>
}

export interface Relationships_3 {
  department?: Maybe<Department_3>

  role?: Maybe<Role_2>

  location?: Maybe<Location_4>

  user?: Maybe<User_2>

  questions?: Maybe<Questions_2>

  candidates?: Maybe<Candidates_2>

  stages?: Maybe<Stages_2>

  colleagues?: Maybe<Colleagues_2>

  team_memberships?: Maybe<TeamMemberships_2>

  picked_questions?: Maybe<PickedQuestions_2>
}

export interface Department_3 {
  links?: Maybe<Links_14>
}

export interface Links_14 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Role_2 {
  data?: Maybe<Data_2>
}

export interface Data_2 {
  id?: Maybe<string>

  type?: Maybe<string>

  links?: Maybe<Links_15>

  attributes?: Maybe<Attributes_4>

  relationships?: Maybe<Relationships_4>
}

export interface Links_15 {
  self?: Maybe<string>
}

export interface Attributes_4 {
  name?: Maybe<string>
}

export interface Relationships_4 {
  department?: Maybe<Department_4>
}

export interface Department_4 {
  links?: Maybe<Links_16>
}

export interface Links_16 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Location_4 {
  links?: Maybe<Links_17>
}

export interface Links_17 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface User_2 {
  links?: Maybe<Links_18>
}

export interface Links_18 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Questions_2 {
  links?: Maybe<Links_19>
}

export interface Links_19 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Candidates_2 {
  links?: Maybe<Links_20>
}

export interface Links_20 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Stages_2 {
  links?: Maybe<Links_21>
}

export interface Links_21 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Colleagues_2 {
  links?: Maybe<Links_22>
}

export interface Links_22 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface TeamMemberships_2 {
  links?: Maybe<Links_23>
}

export interface Links_23 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface PickedQuestions_2 {
  links?: Maybe<Links_24>
}

export interface Links_24 {
  self?: Maybe<string>

  related?: Maybe<string>
}

export interface Internal_17 {
  type?: Maybe<string>

  content?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>

  fieldOwners?: Maybe<FieldOwners_4>
}

export interface FieldOwners_4 {
  href?: Maybe<string>
}

export interface Fields_4 {
  href?: Maybe<string>
}

/** A connection to a list of items. */
export interface TeamtailorJobGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<TeamtailorJobGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface TeamtailorJobGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<TeamtailorJob>
  /** The next edge in the connection */
  next?: Maybe<TeamtailorJob>
  /** The previous edge in the connection */
  previous?: Maybe<TeamtailorJob>
}

/** A connection to a list of items. */
export interface ContentYamlConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentYamlEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<ContentYamlGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface ContentYamlEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentYaml>
  /** The next edge in the connection */
  next?: Maybe<ContentYaml>
  /** The previous edge in the connection */
  previous?: Maybe<ContentYaml>
}

/** A connection to a list of items. */
export interface ContentYamlGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentYamlGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface ContentYamlGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentYaml>
  /** The next edge in the connection */
  next?: Maybe<ContentYaml>
  /** The previous edge in the connection */
  previous?: Maybe<ContentYaml>
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  port?: Maybe<Date>

  host?: Maybe<string>

  pathPrefix?: Maybe<string>

  polyfill?: Maybe<boolean>

  buildTime?: Maybe<Date>

  internal?: Maybe<Internal_18>
}

export interface Internal_18 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePageConnectionSort>

  filter?: Maybe<FilterSitePage>
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePluginConnectionSort>

  filter?: Maybe<FilterSitePlugin>
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<DirectoryConnectionSort>

  filter?: Maybe<FilterDirectory>
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<FileConnectionSort>

  filter?: Maybe<FilterFile>
}
export interface AllImageSharpQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<ImageSharpConnectionSort>

  filter?: Maybe<FilterImageSharp>
}
export interface AllTeamtailorJobQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<TeamtailorJobConnectionSort>

  filter?: Maybe<FilterTeamtailorJob>
}
export interface AllContentYamlQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<ContentYamlConnectionSort>

  filter?: Maybe<FilterContentYaml>
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<MarkdownRemarkConnectionSort>

  filter?: Maybe<FilterMarkdownRemark>
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>

  path?: Maybe<SitePagePathQueryString_2>

  component?: Maybe<SitePageComponentQueryString>

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>

  context?: Maybe<SitePageContextInputObject>

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageComponentPathQueryString>

  id?: Maybe<SitePageIdQueryString_2>

  internal?: Maybe<SitePageInternalInputObject_2>
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>

  id?: Maybe<SitePluginIdQueryString_2>

  name?: Maybe<SitePluginNameQueryString_2>

  version?: Maybe<SitePluginVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>

  internal?: Maybe<SitePluginInternalInputObject_2>
}
export interface SiteQueryArgs {
  port?: Maybe<SitePortQueryString_2>

  host?: Maybe<SiteHostQueryString_2>

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>

  buildTime?: Maybe<SiteBuildTimeQueryString_2>

  id?: Maybe<SiteIdQueryString_2>

  internal?: Maybe<SiteInternalInputObject_2>
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>

  internal?: Maybe<DirectoryInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>

  extension?: Maybe<DirectoryExtensionQueryString_2>

  size?: Maybe<DirectorySizeQueryInteger_2>

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>

  root?: Maybe<DirectoryRootQueryString_2>

  dir?: Maybe<DirectoryDirQueryString_2>

  base?: Maybe<DirectoryBaseQueryString_2>

  ext?: Maybe<DirectoryExtQueryString_2>

  name?: Maybe<DirectoryNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryDevQueryInteger_2>

  mode?: Maybe<DirectoryModeQueryInteger_2>

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>

  uid?: Maybe<DirectoryUidQueryInteger_2>

  gid?: Maybe<DirectoryGidQueryInteger_2>

  rdev?: Maybe<DirectoryRdevQueryInteger_2>

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryInoQueryFloat_2>

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryAtimeQueryString_2>

  mtime?: Maybe<DirectoryMtimeQueryString_2>

  ctime?: Maybe<DirectoryCtimeQueryString_2>

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>

  internal?: Maybe<FileInternalInputObject_2>

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>

  relativePath?: Maybe<FileRelativePathQueryString_2>

  extension?: Maybe<FileExtensionQueryString_2>

  size?: Maybe<FileSizeQueryInteger_2>

  prettySize?: Maybe<FilePrettySizeQueryString_2>

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>

  accessTime?: Maybe<FileAccessTimeQueryString_2>

  changeTime?: Maybe<FileChangeTimeQueryString_2>

  birthTime?: Maybe<FileBirthTimeQueryString_2>

  root?: Maybe<FileRootQueryString_2>

  dir?: Maybe<FileDirQueryString_2>

  base?: Maybe<FileBaseQueryString_2>

  ext?: Maybe<FileExtQueryString_2>

  name?: Maybe<FileNameQueryString_2>

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>

  dev?: Maybe<FileDevQueryInteger_2>

  mode?: Maybe<FileModeQueryInteger_2>

  nlink?: Maybe<FileNlinkQueryInteger_2>

  uid?: Maybe<FileUidQueryInteger_2>

  gid?: Maybe<FileGidQueryInteger_2>

  rdev?: Maybe<FileRdevQueryInteger_2>

  blksize?: Maybe<FileBlksizeQueryInteger_2>

  ino?: Maybe<FileInoQueryFloat_2>

  blocks?: Maybe<FileBlocksQueryInteger_2>

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileAtimeQueryString_2>

  mtime?: Maybe<FileMtimeQueryString_2>

  ctime?: Maybe<FileCtimeQueryString_2>

  birthtime?: Maybe<FileBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_3>
}
export interface ImageSharpQueryArgs {
  id?: Maybe<ImageSharpIdQueryString_2>

  internal?: Maybe<ImageSharpInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_3>

  resolutions?: Maybe<ResolutionsTypeName_3>

  fluid?: Maybe<FluidTypeName_3>

  sizes?: Maybe<SizesTypeName_3>

  original?: Maybe<OriginalTypeName_3>

  resize?: Maybe<ResizeTypeName_3>
}
export interface TeamtailorJobQueryArgs {
  id?: Maybe<TeamtailorJobIdQueryString_2>

  type?: Maybe<TeamtailorJobTypeQueryString_2>

  links?: Maybe<TeamtailorJobLinksInputObject_2>

  attributes?: Maybe<TeamtailorJobAttributesInputObject_2>

  relationships?: Maybe<TeamtailorJobRelationshipsInputObject_2>

  internal?: Maybe<TeamtailorJobInternalInputObject_2>

  fields?: Maybe<TeamtailorJobFieldsInputObject_2>
}
export interface ContentYamlQueryArgs {
  name?: Maybe<ContentYamlNameQueryString_2>

  address?: Maybe<ContentYamlAddressInputObject_2>

  coordinates?: Maybe<ContentYamlCoordinatesQueryList_2>

  email?: Maybe<ContentYamlEmailQueryString_2>

  phone?: Maybe<ContentYamlPhoneQueryString_2>

  social?: Maybe<ContentYamlSocialInputObject_2>

  contacts?: Maybe<ContentYamlContactsQueryList_2>

  id?: Maybe<ContentYamlIdQueryString_2>

  internal?: Maybe<ContentYamlInternalInputObject_2>
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>

  fileAbsolutePath?: Maybe<MarkdownRemarkFileAbsolutePathQueryString_2>

  fields?: Maybe<MarkdownRemarkFieldsInputObject_2>

  html?: Maybe<HtmlQueryString_3>

  excerpt?: Maybe<ExcerptQueryString_3>

  headings?: Maybe<HeadingsQueryList_3>

  timeToRead?: Maybe<TimeToReadQueryInt_3>

  tableOfContents?: Maybe<TableOfContentsQueryString_3>

  wordCount?: Maybe<WordCountTypeName_3>
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePageGroupEnum>
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePluginGroupEnum>
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<DirectoryGroupEnum>
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<FileGroupEnum>
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  quality?: number

  jpegProgressive?: boolean

  pngCompressionLevel?: number

  pngCompressionSpeed?: number

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  base64?: Maybe<boolean>

  traceSVG?: Maybe<Potrace>

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number

  truncate?: Maybe<boolean>

  format?: Maybe<ExcerptFormats>
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string

  maxDepth?: Maybe<number>

  heading?: Maybe<string>
}
export interface StartFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface EndFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DateFields_3Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctImageSharpConnectionArgs {
  field?: Maybe<ImageSharpDistinctEnum>
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<ImageSharpGroupEnum>
}
export interface DistinctTeamtailorJobConnectionArgs {
  field?: Maybe<TeamtailorJobDistinctEnum>
}
export interface GroupTeamtailorJobConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<TeamtailorJobGroupEnum>
}
export interface CreatedAtAttributes_3Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctContentYamlConnectionArgs {
  field?: Maybe<ContentYamlDistinctEnum>
}
export interface GroupContentYamlConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<ContentYamlGroupEnum>
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<MarkdownRemarkGroupEnum>
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
