export const checkImage = (file)=>{

    let err =''

    if(!file) return err="File doesn't exists."

    // if(file.size > 1024 * 1024) //1mb
    //  return err="The Largest Image Size is 1MB"

     if(file.type !== 'image/jpeg' && file.type !== 'image/png')
     return err='Image Formate is incorrect'


     return err;
}