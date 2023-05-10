import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import social from './schemas/social'
import pageInfo from './schemas/pageInfo'
import skill from './schemas/skill'
import project from './schemas/project'
import experience from './schemas/experience'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, social, project,experience],
}
