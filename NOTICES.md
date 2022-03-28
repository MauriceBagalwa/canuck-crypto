# INIT PACKAGE OF PROJECT
 yarn add express mongoose tsao body-parser helmet cors pino pino-pretty joi dayjs config
 yarn add -D @types/express @types/body-parser @types/pino @types/pino-pretty @types/node @types/config typscript ts-node

# RELOAD TSOA
yarn run tsoa routes
yarn run tsc --outDir dist --experimentalDecorators
