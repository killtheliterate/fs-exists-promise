import { stat } from 'fs'

/**
 * `export default fsExists :: String -> Promise Boolean | Error`
 */
export default function fsExists (filePath) {
  return new Promise(function (resolve, reject) {

    stat(filePath, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })

  })
}
