import { test, expect } from 'bun:test'

import { RpcWorker } from './rpc.ts'

test('RPC double()', async () => {
  const worker = new RpcWorker(
    new URL('./test_workers/double.ts', import.meta.url).href,
    { type: 'module' }
  )

  const result = await worker.remoteProcedureCall<number, number>({
    name: 'double',
    args: [2]
  })

  expect(result).toEqual(4)

  worker.terminate()
})

test('error is thrown from worker', async () => {
  const worker = new RpcWorker(
    new URL('./test_workers/error.ts', import.meta.url).href,
    { type: 'module' }
  )

  expect(worker.remoteProcedureCall<undefined, number>({
    name: 'error',
    args: []
  })
  ).rejects.toEqual('Error: runtime error from worker')

  worker.terminate()
})

test('non existent procedure', async () => {
  const worker = new RpcWorker(
    new URL('./test_workers/error.ts', import.meta.url).href,
    { type: 'module' }
  )

  expect(worker.remoteProcedureCall<undefined, number>({
    name: 'non existent',
    args: []
  })
  ).rejects.toEqual("Error: procedure \"non existent\" doesn't exist")

  worker.terminate()
})
