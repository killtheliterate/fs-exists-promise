import { expect } from 'chai'
import { resolve } from 'path'

import fsExists from '../../dist/index'

describe('then', function () {
  it('resolves with a boolean', function (done) {
    fsExists(resolve(__dirname, './exists'))
      .then(function (truth) {
        expect(truth).to.equal(true)
        done()
      })
      .catch(done)
  })
})

describe('catch', function () {
  it('rejects when nothing exists', function (done) {
    fsExists(resolve('.', './nope'))
      .then()
      .catch(function () {
        done()
      })
  })
})
