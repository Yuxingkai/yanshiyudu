(function (designWidth, maxWidth) {
  let doc = document
  let win = window
  let docEl = doc.documentElement
  let remStyle = document.createElement('style')
  let tid

  function refreshRem () {
    let width = docEl.getBoundingClientRect().width
    maxWidth = maxWidth || 540
    width > maxWidth && (width = maxWidth)
    if (width <= 1280) width = 1280
    let rem = width * 50 / designWidth
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'
  }
  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle)
  } else {
    let wrap = doc.createElement('div')
    wrap.appendChild(remStyle)
    doc.write(wrap.innerHTML)
    wrap = null
  }
  refreshRem()
  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '16px'
  } else {
    // eslint-disable-next-line
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = '16px'
    }, false)
  }
})(1920, 1920)
