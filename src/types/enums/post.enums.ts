export const PostStatus = {
  Draft: 'draft',
  Published: 'published',
  Archived: 'archived'
}

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]
