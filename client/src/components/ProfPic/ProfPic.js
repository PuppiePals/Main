import React from "react";

const ProfPic = () =>

<script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>  
<script type="text/javascript">  
  $('#upload_widget_opener').cloudinary_upload_widget(
    { cloud_name: 'demo', upload_preset: 'a5vxnzbp', 
      cropping: 'server', folder: 'user_photos' },
    function(error, result) { console.log(error, result) });
</script>

export default ProfPic;