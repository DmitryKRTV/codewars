// url: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const hh = seconds / 3600  | 0
    const mm = (seconds - hh * 3600) / 60 | 0
    const ss = seconds - mm * 60 - hh * 3600 | 0
    return [hh, mm, ss].map((item) => `${item}`.padStart(2, '0')).join(':')
}
