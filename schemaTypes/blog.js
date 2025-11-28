import { defineType, defineField } from 'sanity'

export const personType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string'
    }),    
    defineField({
      name: 'launchAt',
      title: 'Launch At',
      type: 'datetime',
      options:{
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              allowTimeZoneSwitch: true, // default value, could be omitted
              displayTimeZone: 'Europe/Berlin'
            }
    })
  ]
})