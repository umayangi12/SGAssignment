const express = require('express');
const StudentNotes = require('../../models/StudentNotes');

const router = express.Router();

//save notes
router.post('/stdnotes/save',(req,res)=>{

    let newPost = new StudentNotes(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Request Sent Successfully"
        });
    });
});


//get notes
router.get('/stdnotes',(req,res) =>{
    StudentNotes.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific note
router.get("/stdnotes/:id",(req,res) =>{

    let postId = req.params.id;
    
    StudentNotes.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });

});


//update notes
router.put('/stdnotes/update/:id',(req,res)=>{
    StudentNotes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete notes
router.delete('/stdnotes/delete/:id',(req,res) =>{
    StudentNotes.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;
