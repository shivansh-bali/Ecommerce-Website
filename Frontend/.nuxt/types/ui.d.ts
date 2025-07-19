import * as ui from '#build/ui'
import type { TVConfig } from '@nuxt/ui'
import type { defaultConfig } from 'tailwind-variants'
import colors from 'tailwindcss/colors'

const icons = {"arrowLeft":"i-lucide-arrow-left","arrowRight":"i-lucide-arrow-right","check":"i-lucide-check","chevronDoubleLeft":"i-lucide-chevrons-left","chevronDoubleRight":"i-lucide-chevrons-right","chevronDown":"i-lucide-chevron-down","chevronLeft":"i-lucide-chevron-left","chevronRight":"i-lucide-chevron-right","chevronUp":"i-lucide-chevron-up","close":"i-lucide-x","ellipsis":"i-lucide-ellipsis","external":"i-lucide-arrow-up-right","folder":"i-lucide-folder","folderOpen":"i-lucide-folder-open","loading":"i-lucide-refresh-cw","minus":"i-lucide-minus","plus":"i-lucide-plus","search":"i-lucide-search","arrowUp":"i-lucide-arrow-up","arrowDown":"i-lucide-arrow-down","caution":"i-lucide-circle-alert","copy":"i-lucide-copy","copyCheck":"i-lucide-copy-check","dark":"i-lucide-moon","error":"i-lucide-circle-x","eye":"i-lucide-eye","eyeOff":"i-lucide-eye-off","file":"i-lucide-file-text","hash":"i-lucide-hash","info":"i-lucide-info","light":"i-lucide-sun","menu":"i-lucide-menu","panelClose":"i-lucide-panel-left-close","panelOpen":"i-lucide-panel-left-open","reload":"i-lucide-rotate-ccw","stop":"i-lucide-square","success":"i-lucide-circle-check","system":"i-lucide-monitor","tip":"i-lucide-lightbulb","warning":"i-lucide-triangle-alert"};

type NeutralColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | (string & {})
type Color = Exclude<keyof typeof colors, 'inherit' | 'current' | 'transparent' | 'black' | 'white' | NeutralColor> | (string & {})

type AppConfigUI = {
  colors?: {
    'primary'?: Color
		'secondary'?: Color
		'success'?: Color
		'info'?: Color
		'warning'?: Color
		'error'?: Color
    neutral?: NeutralColor
  }
  icons?: Partial<typeof icons>
  tv?: typeof defaultConfig
} & TVConfig<typeof ui>

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * Nuxt UI theme configuration
     * @see https://ui.nuxt.com/getting-started/theme#customize-theme
     */
    ui?: AppConfigUI
  }
}

export {}
