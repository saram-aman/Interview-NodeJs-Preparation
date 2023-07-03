function str_to_array(str) {
    str = str.replace(/[^a-zA-Z0-9]/gi, '')
    let arr = []
    for (let i = 0; i < str.length; i++) arr.push(str[i])
    return arr
}
printLog(str_to_array("Update firmware and software: Ensure that your AirPods and the device you are connecting to have the latest firmware and software updates installed."))