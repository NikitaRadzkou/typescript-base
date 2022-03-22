function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header: string = 'response header'
  result: string = 'response result'
}

class MyError {
  header: string = 'error header'
  message: string = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    }
  } else {
    return {
      info: res.header + res.message,
    }
  }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {}

setAlertType('success')
setAlertType('warning')
setAlertType('danger')
