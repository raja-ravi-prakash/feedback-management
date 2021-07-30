import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeesOrIndustryFeedback, FacultyOrAluminiFeedback, ParentsFeedback, StudentsFeedback } from './feedback.model';

@Injectable()
export class FeedbackService {

    constructor(
        @InjectModel('Employee') private employee: Model<EmployeesOrIndustryFeedback>,
        @InjectModel('Faculty') private faculty: Model<FacultyOrAluminiFeedback>,
        @InjectModel('Parent') private parent: Model<ParentsFeedback>,
        @InjectModel('Student') private student: Model<StudentsFeedback>
    ) {

    }

    responseMiddleWare(data, message: String, success: Boolean, logger: Logger) {
        if (success) {
            logger.log(message);
        }
        else {
            logger.error(message);
        }
        return {
            status: success,
            data: data,
            message: message
        }
    }

    async createStudent(data: StudentsFeedback) {
        return await this.student.create(data);
    }

    async createFaculty(data: FacultyOrAluminiFeedback) {
        return await this.faculty.create(data);
    }

    async createEmployee(data: EmployeesOrIndustryFeedback) {
        return await this.employee.create(data);
    }

    async createParent(data: ParentsFeedback) {
        return await this.parent.create(data);
    }

}