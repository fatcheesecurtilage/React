import axios from "axios"

export const getCurrentCity = () => {
    //判断 localstroage中是否有定位城市
    const localCity = JSON.parse(localStorage.getItem('hkzf_city'))
    if(!localCity){
        return new Promise((resolve,reject) => {
            const curCity = new window.BMapGL.LocalCity()
            curCity.get(async res => {
                try{
                    const result = await axios.get(
                        `http://192.168.31.217:8080/area/info?name=${res.name}`
                    )
                    localStorage.setItem('hkzf_city',JSON.stringify(result.data.body))
                    resolve(result.data.body)
                }catch(e){
                    reject(e)
                }
            })
        })
    }

    return Promise.resolve(localCity)
}