// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/customers': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/customers').default>>>>
    }
    '/api/mails': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/mails').default>>>>
    }
    '/api/members': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/members').default>>>>
    }
    '/api/notifications': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/notifications').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/__nuxt_island/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/#internal/nuxt/island-renderer').default>>>>
    }
  }
}
export {}