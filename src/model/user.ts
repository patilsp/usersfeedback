import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Message{
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new MessageSchema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    username: String;
    email: String;
    password: String;
    verifyCode: String;
    isVerified: boolean;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new MessageSchema({
    username: {
        type: String,
        required: [, "Username is required"],
        trim:true,
        unique: true
    },
    email: {
        type: String,
        required: [, "Email is required"],
        unique: true,
        match:[/.+\@.+\..+/, "Please enter a valid email address"]

    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry Date is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||  mongoose.model<User>("User", UserSchema)

export default UserModel;