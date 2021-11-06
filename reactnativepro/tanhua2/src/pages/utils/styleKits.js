import { Dimensions } from "react-native";

/*
* 屏幕的宽度
*/
export const screenWidth = Dimensions.get("window").width;
/*
* 屏幕的高度
*/
export const screenHeight = Dimensions.get("window").height;

/**
 * 将px转为dp
 * @param {Number} elePx  元素的宽度或高度 单位 px 
 */
export const pxToDp=(elePx)=>screenWidth*elePx/375