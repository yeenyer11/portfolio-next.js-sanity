import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'language',
        title: 'Language',
        type: 'string',
      }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'projectUrl',
        title: 'ProjectUrl',
        type: 'url',
      }),  
      defineField({
        name: 'infoProject',
        title: 'InfoProject',
        type: 'string',
      }),
      defineField({
        name: 'technologies',
        title: 'technologies',
        type: 'array',
        of:[{ type:"reference", to: {type:"skill"}}]
      }),
  ]
})
