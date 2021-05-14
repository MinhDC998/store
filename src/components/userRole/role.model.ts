import mongoose, { Document, Model } from 'mongoose';
import { ERole, IRole } from '@components/userRole/role.type';

interface IRoleDocument extends IRole, Document {}
interface IRoleModel extends Model<IRoleDocument> {}

const roleSchema = new mongoose.Schema<IRoleDocument, IRoleModel>({
    type: {
        type: String,
        enum: ERole,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

export default mongoose.model('Role', roleSchema);