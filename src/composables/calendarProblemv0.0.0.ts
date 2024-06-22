import type { Row } from '../interface'
//判断是否是闰年
function isLeapYear(year: number): boolean {
    if (year % 100 != 0 && year % 4 == 0) {
        return true
    }
    return false
}
//判断日期是否合法
function validateDate(year: number, month: number, day: number): [boolean, string] {
    if (year < 1 || month < 1 || month > 12) {
        return [false, "年月须为正整数，且月份为1-12"];
    }
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        if (day < 1 || day > 31) {
            return [false, "该月份的天数应在1到31之间"];
        }
    } else if ([4, 6, 9, 11].includes(month)) {
        if (day < 1 || day > 30) {
            return [false, "该月份的天数应在1到30之间"];
        }
    } else if (month === 2) {
        if (isLeapYear(year)) {
            if (day < 1 || day > 29) {
                return [false, "闰年的2月日期应为1-29"];
            }
        } else {
            if (day < 1 || day > 28) {
                return [false, "平年的2月日期应为1-28"];
            }
        }
    }
    return [true, ""];
}

// 接收一组参数，返回字符串结果
function calendarProblem(year: number, month: number, day: number): string {
    let isvalidatedate = validateDate(year, month, day)
    if (isvalidatedate[0]) {
        if ([1, 3, 5, 7, 8, 10,12].includes(month)) {
            if (day === 31) {
                return `${year}年${month + 1}月1日`;
            } else {
                return `${year}年${month}月${day + 1}日`;
            }
        } else if (month === 2) {
            if (isLeapYear(year)) {
                if (day === 29) {
                    return `${year}年${month + 1}月1日`;
                } else {
                    return `${year}年${month}月${day + 1}日`;
                }
            } else {
                if (day === 28) {
                    return `${year}年${month + 1}月1日`;
                } else {
                    return `${year}年${month}月${day + 1}日`;
                }
            }
        } else {
            if (day === 30) {
                return `${year}年${month + 1}月1日`;
            } else {
                return `${year}年${month}月${day + 1}日`;
            }
        }
    } else {
        return isvalidatedate[1];
    }
}

// 根据.csv文件的表头字段提取对应的参数，返回参数数组
function getArgs(row: Row): number[] {
    const args = [Number.parseInt(row.Year as string), Number.parseInt(row.Month as string), Number.parseInt(row.Day as string)]
    return args
}

// 添加别名，进行导出
export { calendarProblem as useSingleTest, getArgs as useGetArgs }