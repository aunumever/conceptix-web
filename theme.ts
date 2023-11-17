
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const conceptixTheme: CustomThemeConfig = {
    name: 'conceptix',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #2dd4bf 
		"--color-primary-50": "224 249 245", // #e0f9f5
		"--color-primary-100": "213 246 242", // #d5f6f2
		"--color-primary-200": "203 244 239", // #cbf4ef
		"--color-primary-300": "171 238 229", // #abeee5
		"--color-primary-400": "108 225 210", // #6ce1d2
		"--color-primary-500": "45 212 191", // #2dd4bf
		"--color-primary-600": "41 191 172", // #29bfac
		"--color-primary-700": "34 159 143", // #229f8f
		"--color-primary-800": "27 127 115", // #1b7f73
		"--color-primary-900": "22 104 94", // #16685e
		// secondary | #6366f1 
		"--color-secondary-50": "232 232 253", // #e8e8fd
		"--color-secondary-100": "224 224 252", // #e0e0fc
		"--color-secondary-200": "216 217 252", // #d8d9fc
		"--color-secondary-300": "193 194 249", // #c1c2f9
		"--color-secondary-400": "146 148 245", // #9294f5
		"--color-secondary-500": "99 102 241", // #6366f1
		"--color-secondary-600": "89 92 217", // #595cd9
		"--color-secondary-700": "74 77 181", // #4a4db5
		"--color-secondary-800": "59 61 145", // #3b3d91
		"--color-secondary-900": "49 50 118", // #313276
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #1e1b4b 
		"--color-surface-50": "221 221 228", // #dddde4
		"--color-surface-100": "210 209 219", // #d2d1db
		"--color-surface-200": "199 198 210", // #c7c6d2
		"--color-surface-300": "165 164 183", // #a5a4b7
		"--color-surface-400": "98 95 129", // #625f81
		"--color-surface-500": "30 27 75", // #1e1b4b
		"--color-surface-600": "27 24 68", // #1b1844
		"--color-surface-700": "23 20 56", // #171438
		"--color-surface-800": "18 16 45", // #12102d
		"--color-surface-900": "15 13 37", // #0f0d25
		
	}
}