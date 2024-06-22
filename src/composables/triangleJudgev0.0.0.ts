import type { Row } from '../interface'


// 接收一组参数，返回字符串结果
function triangleJudge(a: number, b: number, c: number): string {
    let sideList = [a, b, c];
    sideList.sort((a, b) => a - b);
    if (sideList[0] + sideList[1] <= sideList[2]) {
        return "Not triangle";
    }

    if (sideList[0] == sideList[2]) {
        return "Equilateral triangle";
    }

    if (sideList[0] == sideList[1] || sideList[1] == sideList[2]) {
        return "Isosceles triangle";
    }

    return "Normal triangle";
    
}

// 根据.csv文件的表头字段提取对应的参数，返回参数数组
function getArgs(row: Row): number[] {
    const args = [Number.parseInt(row.Edge1 as string), Number.parseInt(row.Edge2 as string), Number.parseInt(row.Edge3 as string)]
    return args
}

// 添加别名，进行导出
export { triangleJudge as useSingleTest, getArgs as useGetArgs }