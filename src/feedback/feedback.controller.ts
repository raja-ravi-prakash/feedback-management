import { Controller, Post, Body, Logger, Get, Render } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedBackController {

    constructor(private feedbackService: FeedbackService) { }

    private readonly logger: Logger = new Logger(FeedBackController.name);

    @Post('parents')
    async createParentFeedback(@Body() body) {
        try {
            let res = await this.feedbackService.createParent(body);
            return this.feedbackService.responseMiddleWare(res, "Parent Feedback Doc Created Successfully", true, this.logger);
        } catch (error) {
            return this.feedbackService.responseMiddleWare(null, error.mesage, false, this.logger);
        }
    }

    @Post('students')
    async createStudentFeedback(@Body() body) {
        // try {
        let res = await this.feedbackService.createStudent(body);
        return this.feedbackService.responseMiddleWare(res, "Student Feedback Doc Created Successfully", true, this.logger);
        // } catch (error) {
        //     return this.feedbackService.responseMiddleWare(null, error.mesage, false, this.logger);
        // }
    }

    @Post('employee')
    async createEmployeeFeedback(@Body() body) {
        try {
            let res = await this.feedbackService.createEmployee(body);
            return this.feedbackService.responseMiddleWare(res, "Employee Feedback Doc Created Successfully", true, this.logger);
        } catch (error) {
            return this.feedbackService.responseMiddleWare(null, error.mesage, false, this.logger);
        }
    }

    @Post('faculty')
    async createFacultyFeedback(@Body() body) {
        try {
            let res = await this.feedbackService.createFaculty(body);
            return this.feedbackService.responseMiddleWare(res, "Faculty Feedback Doc Created Successfully", true, this.logger);
        } catch (error) {
            return this.feedbackService.responseMiddleWare(null, error.mesage, false, this.logger);
        }
    }

}