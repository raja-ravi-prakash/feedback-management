import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmployeeSchema, FacultySchema, ParentsSchema, StudentsSchema } from './feedback/feedback.model';
import { FeedBackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      {
        name: "Employee",
        schema: EmployeeSchema
      },
      {
        name: "Faculty",
        schema: FacultySchema
      },
      {
        name: "Parent",
        schema: ParentsSchema
      },
      {
        name: "Student",
        schema: StudentsSchema
      }
    ])
  ],
  controllers: [AppController, FeedBackController],
  providers: [AppService, FeedbackService],
})
export class AppModule { }
