import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobtitle',
      title: 'Jobtitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date'
    }),
    defineField({
      name: 'isCuerrentWorkingHere',
      title: 'IsCuerrentWorkingHere',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of:[{ type:"reference", to: {type:"skill"}}]
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type:"string"}]
    }),
  ],

})
