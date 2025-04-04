import { carousel } from './carousel'
import { hero } from './hero'
import { callout } from './callout'
import { quote } from './quote'
import { tweet } from './tweet'
import { youtubeVideo } from './youtube-video'
import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks'

// it's important that this file has a named export called componentBlocks
// schema.Post.ui.views import looks for a named export `componentBlocks`
export const componentBlocks = {
  carousel,
  hero,
  callout,
  quote,
  tweet,
  youtubeVideo,
}

export type Renderers = InferRenderersForComponentBlocks<typeof componentBlocks>
