import { DocumentNode } from 'graphql'

type ApiStatus = 'start' | 'success' | 'error' | 'end'
type ApiType = 'query' | 'mutation' | 'subscription'

interface ApiOptions {
    lazy?: boolean
    query: DocumentNode
}

interface ApiRequestOptions {
    uri?: string
    headers?: Record<string, any>
}

export { ApiStatus, ApiType, ApiOptions, ApiRequestOptions }

