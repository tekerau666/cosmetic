export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string,
    build: string,
    html: string,
}


export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPath,
    isDev: boolean,
}