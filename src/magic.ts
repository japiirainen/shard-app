import { config } from '../config'

import { Magic } from '@magic-sdk/react-native'

export const m = new Magic(config.secrets.MAGIC_PUBLISHABLE_KEY)
