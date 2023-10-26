import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'HART Magazine',

  projectId: '7jb6yrlj',
  dataset: 'hm',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
