import { Document, Schema } from 'mongoose';


export const EducationType = [
    "Graduate",
    "Post Graduate",
    "Other"
];

export const RatingVals = [
    { value: "EXCELLENT", data: 5 },
    { value: "VERY GOOD", data: 4 },
    { value: "GOOD", data: 3 },
    { value: "SATISFACTORY", data: 2 },
    { value: "POOR", data: 1 }
];

export interface Rating {
    question: string,
    rating: string
}

export var facultyQuestions: string[] = [
    "Courses in the Curriculum are appropriate, useful to students to promote advanced learning",
    "The sequence of courses is appropriate and are evenly distributed across the Curriculum",
    "Understanding the level required to study this program is as per the level of the student",
    "Field projects/Internships/student projects are adequate in the Curriculum",
    "The designed Curriculum impart necessary skills to students which make them industry ready",
    "The courses are relevant for competitive examinations like GATE, PSU etc.,",
    "The courses are updated with the current trends of Industry and Academia to facilitate placements.",
    "The academic flexibility embedded in the curriculum provides vast opportunities to students",
    "Courses in the curriculum promote Entrepreneurship and students are encouraged and supported to initiate startups.",
    "Courses are relevant to local, national, regional, and Global development needs",
    "Extent of Curriculum addressing gender, environment and sustainability, human values and professional ethics, development of creative and divergent competencies.",
    "Rate the electives offered in Curriculum relation to the Technological advancements/extra learning/self-learning",
    "Overall rating on Curriculum"
];

export interface FacultyOrAluminiFeedback extends Document {
    department: string,
    name: string,
    education: string,
    designation: string,
    occupationDetails: string,
    academicYear: number,
    regulation: string,
    ratings: Rating[]
    suggestions: string
}

export const FacultySchema = new Schema({
    department: String,
    name: String,
    education: String,
    designation: String,
    occupationDetails: String,
    academicYear: Number,
    regulation: String,
    ratings: [{
        question: String,
        rating: Number
    }],
    suggestions: String
});

export var employeeOrIndustryQuestions: string[] = [
    "Adequate flexibility available in the choice of subjects to the students",
    "The courses offered to provide a solution to issues relevant to Gender, Ethics, Human Values, Environment and Sustainability.",
    "The current syllabus is job-oriented, skill-based, and value-oriented.",
    "The curriculum is relevant for employability and job placement.",
    "The curriculum is relevant for the solution of global and national problems.",
    "Effectiveness of curriculum for the development of entrepreneurship.",
    "The Courses helps in bridging the gap between industry and academic institutions.",
    "Overall impression about the Curriculum"
];

export interface EmployeesOrIndustryFeedback extends Document {
    department: string,
    academicYear: number,
    regulation: string,
    ratings: Rating[]
    suggestions: string
}

export const EmployeeSchema = new Schema({
    department: String,
    academicYear: Number,
    regulation: String,
    ratings: [{
        question: String,
        rating: Number
    }],
    suggestions: String
});

export var parentQuestions: string[] = [
    "Courses in the curriculum promote Entrepreneurship",
    "Sensitization of Students towards cross- cutting issues like gender equality, environment, and sustainability, ethics and values, etc.",
    "Academic flexibility in the curriculum",
    "Hands-on experience through Curriculum",
    "The curriculum has been designed to make students industry-ready",
    "The curriculum is outcome-based",
    "Overall impression about the Curriculum"
];

export interface ParentsFeedback extends Document {
    ratings: Rating[],
    suggestions: string[]
}

export const ParentsSchema = new Schema({
    ratings: [{
        question: String,
        rating: Number
    }],
    suggestions: [{
        type: String
    }]
});

export var studentsQuestions: string[] = [
    "Adequate flexibility available in the curriculum helped to work in multidisciplinary fields",
    "The Curriculum is compatibility competitive examinations",
    "Professional enhancement/Communication skills inputs sufficiently provided in the Curriculum",
    "Courses in the curriculum promote Entrepreneurship and students are encouraged and supported to initiate startups.",
    "The designed Curriculum has helped in meeting the job opportunity and placements",
    "Curriculum provides holistic development of the students",
    "Overall impression about the Curriculum"
];

export interface StudentsFeedback {
    ratings: Rating[],
    suggestions: string[]
}

export const StudentsSchema = new Schema({
    ratings: [{
        question: String,
        rating: Number
    }],
    suggestions: [{
        type: String
    }]
});