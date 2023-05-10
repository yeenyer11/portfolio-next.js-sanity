/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/

import { defineCliConfig } from 'sanity/cli'
import { createAbstractBuilder } from 'typescript'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const basePath = process.env.NEXT_PUBLIC_BASE_URL 
export default defineCliConfig({ api: { projectId:'ji7o74ph', dataset:'production',  } })

