declare namespace API {
  type addCourseEnrollmentParams = {
    courseId: number;
  };

  type addStudyNoteParams = {
    courseId: number;
  };

  type aiParams = {
    userInput: string;
  };

  type Answer = {
    /** 问题ID */
    questionId?: number;
    /** 答案 */
    answer?: string;
  };

  type Assignment = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
  };

  type AssignmentDetailQuery = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
    /** 学生Id */
    studentId?: number;
    /** 作业提交信息Id */
    submissionId?: number;
    /** 作业提交状态 */
    submissionStatus?: "0" | "1" | "2";
    /** 作业提交状态值 */
    submissionStatusList?: ("0" | "1" | "2")[];
    /** 作业提交时间 */
    submitTime?: string;
  };

  type AssignmentDetailVO = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
    /** 学生Id */
    studentId?: number;
    student?: UserVO;
    /** 作业提交信息Id */
    submissionId?: number;
    /** 作业提交状态 */
    submissionStatus?: "0" | "1" | "2";
    /** 作业提交时间 */
    submitTime?: string;
    submission?: AssignmentSubmission;
  };

  type AssignmentFeedbackParam = {
    /** 提交ID */
    submissionId?: number;
    /** 得分 */
    score: number;
    /** 反馈内容 */
    feedback?: string;
  };

  type AssignmentQuery = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
  };

  type AssignmentStatVO = {
    /** 未提交次数 */
    unCommittedCount?: number;
    /** 未批改次数 */
    unCorrectedCount?: number;
    /** 已批改次数 */
    correctedCount?: number;
    /** 总次数 */
    totalCount?: number;
  };

  type AssignmentSubmission = {
    /** 提交ID */
    submissionId?: number;
    /** 作业ID */
    assignmentId: number;
    /** 学生ID */
    studentId?: number;
    /** 提交内容 */
    content?: string;
    /** 文件URL */
    fileUrl?: string;
    /** 状态：0-未提交、1-未批改、2-已批改 */
    status?: "0" | "1" | "2";
    /** 得分 */
    score?: number;
    /** 反馈内容 */
    feedback?: string;
    /** 提交时间 */
    submitTime?: string;
  };

  type AssignmentSubmissionCommitParam = {
    /** 提交内容 */
    content?: string;
    /** 文件URL */
    fileUrl?: string;
  };

  type AssignmentSubmissionQuery = {
    /** 提交ID */
    submissionId?: number;
    /** 作业ID */
    assignmentId: number;
    /** 学生ID */
    studentId?: number;
    /** 提交内容 */
    content?: string;
    /** 文件URL */
    fileUrl?: string;
    /** 状态：0-未提交、1-未批改、2-已批改 */
    status?: "0" | "1" | "2";
    /** 得分 */
    score?: number;
    /** 反馈内容 */
    feedback?: string;
    /** 提交时间 */
    submitTime?: string;
  };

  type AssignmentSubmissionVO = {
    /** 提交ID */
    submissionId?: number;
    /** 作业ID */
    assignmentId: number;
    /** 学生ID */
    studentId?: number;
    /** 提交内容 */
    content?: string;
    /** 文件URL */
    fileUrl?: string;
    /** 状态：0-未提交、1-未批改、2-已批改 */
    status?: "0" | "1" | "2";
    /** 得分 */
    score?: number;
    /** 反馈内容 */
    feedback?: string;
    /** 提交时间 */
    submitTime?: string;
    assignment?: AssignmentVO;
    student?: UserVO;
  };

  type AssignmentSubmitParam = {
    /** 作业ID */
    assignmentId: number;
    /** 提交内容 */
    content?: string;
    /** 文件URL */
    fileUrl?: string;
  };

  type AssignmentVO = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
  };

  type AssignmentWithStatVO = {
    /** 作业ID */
    assignmentId?: number;
    /** 课程ID */
    courseId: number;
    /** 作业标题 */
    title: string;
    /** 作业描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
    stat?: AssignmentStatVO;
  };

  type checkCourseEnrolledParams = {
    courseId: number;
  };

  type commitAssignmentSubmissionParams = {
    id: number;
  };

  type correctAssignmentSubmissionParams = {
    id: number;
  };

  type Course = {
    /** 课程ID */
    courseId?: number;
    /** 课程标题 */
    title?: string;
    /** 课程描述 */
    description?: string;
    /** 分类ID */
    categoryId?: number;
    /** 教师ID */
    teacherId?: number;
    /** 讲师名称 */
    teacherName?: string;
    /** 封面图片URL */
    coverImage?: string;
    /** 是否推荐 */
    isRecommended?: boolean;
    /** 课程状态：0-草稿、1-已发布、2-已归档 */
    status?: "0" | "1" | "2";
    /** 是否允许评论 */
    allowComment?: boolean;
    /** 是否允许笔记 */
    allowNotes?: boolean;
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 学生数量 */
    studentCount?: number;
    /** 学习进度 */
    progress?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type CourseCarousel = {
    /** 轮播图ID */
    carouselId?: number;
    /** 课程ID */
    courseId?: number;
    /** 图片URL */
    imageUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 是否启用 */
    status?: boolean;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseCarouselQuery = {
    /** 轮播图ID */
    carouselId?: number;
    /** 课程ID */
    courseId?: number;
    /** 图片URL */
    imageUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 是否启用 */
    status?: boolean;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseCarouselVO = {
    /** 轮播图ID */
    carouselId?: number;
    /** 课程ID */
    courseId?: number;
    /** 图片URL */
    imageUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 是否启用 */
    status?: boolean;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
  };

  type CourseCategory = {
    /** 分类ID */
    categoryId?: number;
    /** 分类名称 */
    name?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseCategoryQuery = {
    /** 分类ID */
    categoryId?: number;
    /** 分类名称 */
    name?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseCategoryVO = {
    /** 分类ID */
    categoryId?: number;
    /** 分类名称 */
    name?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseEnrollmentQuery = {
    /** 注册ID */
    enrollmentId?: number;
    /** 课程ID */
    courseId?: number;
    /** 学生ID */
    studentId?: number;
    /** 状态：0-选中 ，1-收藏 ，2-取消 */
    status?: "0" | "1" | "2";
    /** 注册时间 */
    createTime?: string;
  };

  type CourseEnrollmentVO = {
    /** 注册ID */
    enrollmentId?: number;
    /** 课程ID */
    courseId?: number;
    /** 学生ID */
    studentId?: number;
    /** 状态：0-选中 ，1-收藏 ，2-取消 */
    status?: "0" | "1" | "2";
    /** 注册时间 */
    createTime?: string;
    course?: CourseVO;
    student?: UserVO;
  };

  type CourseMaterial = {
    /** 课件ID */
    materialId?: number;
    /** 课程ID */
    courseId?: number;
    /** 课件标题 */
    title?: string;
    /** 课件类型：0-文档、1-视频、2-音频、3-图片 */
    type?: number;
    /** 内容URL */
    contentUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseMaterialQuery = {
    /** 课件ID */
    materialId?: number;
    /** 课程ID */
    courseId?: number;
    /** 课件标题 */
    title?: string;
    /** 课件类型：0-文档、1-视频、2-音频、3-图片 */
    type?: number;
    /** 内容URL */
    contentUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type CourseMaterialVO = {
    /** 课件ID */
    materialId?: number;
    /** 课程ID */
    courseId?: number;
    /** 课件标题 */
    title?: string;
    /** 课件类型：0-文档、1-视频、2-音频、3-图片 */
    type?: number;
    /** 内容URL */
    contentUrl?: string;
    /** 排序顺序 */
    sortOrder?: number;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
  };

  type CourseQuery = {
    /** 课程ID */
    courseId?: number;
    /** 课程标题 */
    title?: string;
    /** 课程描述 */
    description?: string;
    /** 分类ID */
    categoryId?: number;
    /** 教师ID */
    teacherId?: number;
    /** 讲师名称 */
    teacherName?: string;
    /** 封面图片URL */
    coverImage?: string;
    /** 是否推荐 */
    isRecommended?: boolean;
    /** 课程状态：0-草稿、1-已发布、2-已归档 */
    status?: "0" | "1" | "2";
    /** 是否允许评论 */
    allowComment?: boolean;
    /** 是否允许笔记 */
    allowNotes?: boolean;
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 学生数量 */
    studentCount?: number;
    /** 学习进度 */
    progress?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    sorter?: Sorter;
    /** 状态值多选 */
    statuses?: ("0" | "1" | "2")[];
    /** 课程id */
    courseIds?: number[];
  };

  type CourseVO = {
    /** 课程ID */
    courseId?: number;
    /** 课程标题 */
    title?: string;
    /** 课程描述 */
    description?: string;
    /** 分类ID */
    categoryId?: number;
    /** 教师ID */
    teacherId?: number;
    /** 讲师名称 */
    teacherName?: string;
    /** 封面图片URL */
    coverImage?: string;
    /** 是否推荐 */
    isRecommended?: boolean;
    /** 课程状态：0-草稿、1-已发布、2-已归档 */
    status?: "0" | "1" | "2";
    /** 是否允许评论 */
    allowComment?: boolean;
    /** 是否允许笔记 */
    allowNotes?: boolean;
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 学生数量 */
    studentCount?: number;
    /** 学习进度 */
    progress?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    category?: CourseCategoryVO;
    teacher?: UserVO;
  };

  type CourseWithEnrollQuery = {
    /** 课程ID */
    courseId?: number;
    /** 课程标题 */
    title?: string;
    /** 课程描述 */
    description?: string;
    /** 分类ID */
    categoryId?: number;
    /** 教师ID */
    teacherId?: number;
    /** 讲师名称 */
    teacherName?: string;
    /** 封面图片URL */
    coverImage?: string;
    /** 是否推荐 */
    isRecommended?: boolean;
    /** 课程状态：0-草稿、1-已发布、2-已归档 */
    status?: "0" | "1" | "2";
    /** 是否允许评论 */
    allowComment?: boolean;
    /** 是否允许笔记 */
    allowNotes?: boolean;
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 学生数量 */
    studentCount?: number;
    /** 学习进度 */
    progress?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    sorter?: Sorter;
    /** 状态值多选 */
    statuses?: ("0" | "1" | "2")[];
    /** 课程id */
    courseIds?: number[];
    /** 注册ID */
    enrollmentId?: number;
    /** 学生ID */
    studentId?: number;
    /** 注册状态 0-选中 ，1-收藏 ，2-取消 */
    enrollStatus?: "0" | "1" | "2";
  };

  type CourseWithEnrollVO = {
    /** 课程ID */
    courseId?: number;
    /** 课程标题 */
    title?: string;
    /** 课程描述 */
    description?: string;
    /** 分类ID */
    categoryId?: number;
    /** 教师ID */
    teacherId?: number;
    /** 讲师名称 */
    teacherName?: string;
    /** 封面图片URL */
    coverImage?: string;
    /** 是否推荐 */
    isRecommended?: boolean;
    /** 课程状态：0-草稿、1-已发布、2-已归档 */
    status?: "0" | "1" | "2";
    /** 是否允许评论 */
    allowComment?: boolean;
    /** 是否允许笔记 */
    allowNotes?: boolean;
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 学生数量 */
    studentCount?: number;
    /** 学习进度 */
    progress?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    category?: CourseCategoryVO;
    teacher?: UserVO;
    /** 学生ID */
    studentId?: number;
    student?: UserVO;
    /** 注册ID */
    enrollmentId?: number;
    /** 注册状态 */
    enrollStatus?: "0" | "1" | "2";
    /** 注册时间 */
    enrollTime?: string;
  };

  type deleteAssignmentParams = {
    id: number;
  };

  type deleteAssignmentSubmissionParams = {
    id: number;
  };

  type deleteCourseCarouselParams = {
    id: number;
  };

  type deleteCourseCategoryParams = {
    id: number;
  };

  type deleteCourseEnrollmentParams = {
    id: number;
  };

  type deleteCourseMaterialParams = {
    id: number;
  };

  type deleteCourseParams = {
    id: number;
  };

  type deleteDiscussionParams = {
    id: number;
  };

  type deleteQuestionBankParams = {
    id: number;
  };

  type deleteRoleParams = {
    id: number;
  };

  type deleteSelfTestParams = {
    id: number;
  };

  type deleteStudyNoteParams = {
    id: number;
  };

  type deleteTestRecordParams = {
    id: number;
  };

  type deleteUserParams = {
    id: number;
  };

  type Discussion = {
    /** 讨论ID */
    discussionId?: number;
    /** 课程ID */
    courseId?: number;
    /** 创建人id */
    userId?: number;
    /** 标题 */
    title?: string;
    /** 讨论内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type DiscussionForm = {
    /** 课程id */
    courseId: number;
    /** 标题 */
    title: string;
    /** 讨论内容 */
    content?: string;
  };

  type DiscussionQuery = {
    /** 讨论ID */
    discussionId?: number;
    /** 课程ID */
    courseId?: number;
    /** 创建人id */
    userId?: number;
    /** 标题 */
    title?: string;
    /** 讨论内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    sorter?: Sorter;
  };

  type DiscussionReplyForm = {
    /** 讨论ID ,如果回复讨论则传讨论ID，如果回复回复则传回复ID */
    discussionId?: number;
    /** 讨论回复id，如果回复讨论则传null，如果回复回复则传回复ID */
    replyId?: number;
    /** 回复内容 */
    content: string;
  };

  type DiscussionReplyQuery = {
    /** 讨论ID */
    discussionId?: number;
    sorter?: Sorter;
  };

  type DiscussionReplyWithSubVO = {
    /** 回复ID */
    replyId?: number;
    /** 讨论ID */
    discussionId?: number;
    /** 回复人id */
    userId?: number;
    /** 回复内容 */
    content?: string;
    /** 父回复ID,如果为无则为一级回复 */
    parentId?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 回复时间 */
    createTime?: string;
    user?: UserVO;
    /** 是否是老师 */
    isTeacher?: boolean;
    /** 回复数 */
    replyCount?: number;
    /** 子回复内容 */
    subReplies?: DiscussionSubReplyVO[];
  };

  type DiscussionSubReplyVO = {
    /** 回复ID */
    replyId?: number;
    /** 讨论ID */
    discussionId?: number;
    /** 回复人id */
    userId?: number;
    /** 回复内容 */
    content?: string;
    /** 父回复ID,如果为无则为一级回复 */
    parentId?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 回复时间 */
    createTime?: string;
    user?: UserVO;
    /** 是否是老师 */
    isTeacher?: boolean;
    /** 回复数 */
    replyCount?: number;
    replyTo?: UserVO;
  };

  type DiscussionVO = {
    /** 讨论ID */
    discussionId?: number;
    /** 课程ID */
    courseId?: number;
    /** 创建人id */
    userId?: number;
    /** 标题 */
    title?: string;
    /** 讨论内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
    user?: UserVO;
    /** 是为否教师 */
    isTeacher?: boolean;
    /** 回复数 */
    replayCount?: number;
  };

  type DiscussionWithReplyVO = {
    /** 讨论ID */
    discussionId?: number;
    /** 课程ID */
    courseId?: number;
    /** 创建人id */
    userId?: number;
    /** 标题 */
    title?: string;
    /** 讨论内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
    user?: UserVO;
    /** 是为否教师 */
    isTeacher?: boolean;
    /** 回复数 */
    replayCount?: number;
    /** 回复列表,预览前三条 */
    replyList?: DiscussionReplyWithSubVO[];
    /** 回复数 */
    replyCount?: number;
  };

  type enableDisableUserParams = {
    id: number;
  };

  type getAssignmentDetailsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentDetailQuery;
  };

  type getAssignmentParams = {
    id: number;
  };

  type getAssignmentsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentQuery;
  };

  type getAssignmentStatInfoParams = {
    param: AssignmentDetailQuery;
  };

  type getAssignmentSubmissionParams = {
    id: number;
  };

  type getAssignmentSubmissionsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentSubmissionQuery;
  };

  type getAssignmentsWithStatsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentDetailQuery;
  };

  type getCourseCarouselParams = {
    id: number;
  };

  type getCourseCarouselsParams = {
    current?: number;
    pageSize?: number;
    param: CourseCarouselQuery;
  };

  type getCourseCategoryParams = {
    id: number;
  };

  type getCourseCategorysParams = {
    current?: number;
    pageSize?: number;
    param: CourseCategoryQuery;
  };

  type getCourseEnrollmentParams = {
    id: number;
  };

  type getCourseEnrollmentsParams = {
    current?: number;
    pageSize?: number;
    param: CourseEnrollmentQuery;
  };

  type getCourseMaterialParams = {
    id: number;
  };

  type getCourseMaterialsByCourseIdParams = {
    courseId: number;
  };

  type getCourseMaterialsParams = {
    current?: number;
    pageSize?: number;
    param: CourseMaterialQuery;
  };

  type getCourseParams = {
    id: number;
  };

  type getCoursesParams = {
    current?: number;
    pageSize?: number;
    param: CourseQuery;
  };

  type getCourseStudentsParams = {
    id: number;
  };

  type getCoursesWithEnrollParams = {
    current?: number;
    pageSize?: number;
    param: CourseWithEnrollQuery;
  };

  type getDiscussionParams = {
    id: number;
  };

  type getDiscussionRepliesParams = {
    current?: number;
    pageSize?: number;
    param: DiscussionReplyQuery;
  };

  type getDiscussionsParams = {
    current?: number;
    pageSize?: number;
    param: DiscussionQuery;
  };

  type getMyAssignmentDetailsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentDetailQuery;
  };

  type getMyAssignmentSubmissionsParams = {
    current?: number;
    pageSize?: number;
    param: AssignmentSubmissionQuery;
  };

  type getMyCourseEnrollmentsParams = {
    current?: number;
    pageSize?: number;
    param: CourseEnrollmentQuery;
  };

  type getMyCoursesWithEnrollParams = {
    current?: number;
    pageSize?: number;
    param: CourseWithEnrollQuery;
  };

  type getMyDiscussionsParams = {
    current?: number;
    pageSize?: number;
    param: DiscussionQuery;
  };

  type getMySelfTestsWithRecordsParams = {
    current?: number;
    pageSize?: number;
    param: SelfTestWithRecordQuery;
  };

  type getMyStudyNotesParams = {
    current?: number;
    pageSize?: number;
    param: StudyNoteQuery;
  };

  type getMyTestRecordsParams = {
    current?: number;
    pageSize?: number;
    param: TestRecordQuery;
  };

  type getQuestionBankParams = {
    id: number;
  };

  type getQuestionBanksParams = {
    current?: number;
    pageSize?: number;
    param: QuestionBankQuery;
  };

  type getQuestionParams = {
    id: number;
  };

  type getRoleParams = {
    id: number;
  };

  type getRolesParams = {
    current?: number;
    pageSize?: number;
    param: RoleQuery;
  };

  type getSelfTestParams = {
    id: number;
  };

  type getSelfTestsParams = {
    current?: number;
    pageSize?: number;
    param: SelfTestQuery;
  };

  type getSelfTestsWithRecordsParams = {
    current?: number;
    pageSize?: number;
    param: SelfTestWithRecordQuery;
  };

  type getStudentsParams = {
    current?: number;
    pageSize?: number;
    param: UserQuery;
  };

  type getStudyNoteParams = {
    id: number;
  };

  type getStudyNotesParams = {
    current?: number;
    pageSize?: number;
    param: StudyNoteQuery;
  };

  type getTeachersParams = {
    current?: number;
    pageSize?: number;
    param: UserQuery;
  };

  type getTestRecordParams = {
    id: number;
  };

  type getTestRecordsParams = {
    current?: number;
    pageSize?: number;
    param: TestRecordQuery;
  };

  type getUserParams = {
    id: number;
  };

  type getUsersParams = {
    current?: number;
    pageSize?: number;
    param: UserQuery;
  };

  type ListResultAssignmentDetailVO = {
    list?: AssignmentDetailVO[];
    total?: number;
  };

  type ListResultAssignmentSubmissionVO = {
    list?: AssignmentSubmissionVO[];
    total?: number;
  };

  type ListResultAssignmentVO = {
    list?: AssignmentVO[];
    total?: number;
  };

  type ListResultAssignmentWithStatVO = {
    list?: AssignmentWithStatVO[];
    total?: number;
  };

  type ListResultCourseCarouselVO = {
    list?: CourseCarouselVO[];
    total?: number;
  };

  type ListResultCourseCategoryVO = {
    list?: CourseCategoryVO[];
    total?: number;
  };

  type ListResultCourseEnrollmentVO = {
    list?: CourseEnrollmentVO[];
    total?: number;
  };

  type ListResultCourseMaterialVO = {
    list?: CourseMaterialVO[];
    total?: number;
  };

  type ListResultCourseVO = {
    list?: CourseVO[];
    total?: number;
  };

  type ListResultCourseWithEnrollVO = {
    list?: CourseWithEnrollVO[];
    total?: number;
  };

  type ListResultDiscussionReplyWithSubVO = {
    list?: DiscussionReplyWithSubVO[];
    total?: number;
  };

  type ListResultDiscussionVO = {
    list?: DiscussionVO[];
    total?: number;
  };

  type ListResultDiscussionWithReplyVO = {
    list?: DiscussionWithReplyVO[];
    total?: number;
  };

  type ListResultQuestionBankVO = {
    list?: QuestionBankVO[];
    total?: number;
  };

  type ListResultRoleVO = {
    list?: RoleVO[];
    total?: number;
  };

  type ListResultSelfTestVO = {
    list?: SelfTestVO[];
    total?: number;
  };

  type ListResultSelfTestWithRecordVO = {
    list?: SelfTestWithRecordVO[];
    total?: number;
  };

  type ListResultStudyNoteVO = {
    list?: StudyNoteVO[];
    total?: number;
  };

  type ListResultTestRecordVO = {
    list?: TestRecordVO[];
    total?: number;
  };

  type ListResultUserVO = {
    list?: UserVO[];
    total?: number;
  };

  type publishSelfTestParams = {
    id: number;
    courseId: number;
  };

  type QuestionBank = {
    /** 题目ID */
    questionId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 所属课程ID */
    courseId?: number;
    /** 题目类型：0-单选、1-多选、2-判断、3-填空、4-问答 */
    type?: number;
    /** 题目内容 */
    questionText?: string;
    /** 选项JSON */
    options?: string;
    /** 正确答案 */
    correctAnswer?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type QuestionBankQuery = {
    /** 题目ID */
    questionId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 所属课程ID */
    courseId?: number;
    /** 题目类型：0-单选、1-多选、2-判断、3-填空、4-问答 */
    type?: number;
    /** 题目内容 */
    questionText?: string;
    /** 选项JSON */
    options?: string;
    /** 正确答案 */
    correctAnswer?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type QuestionBankVO = {
    /** 题目ID */
    questionId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 所属课程ID */
    courseId?: number;
    /** 题目类型：0-单选、1-多选、2-判断、3-填空、4-问答 */
    type?: number;
    /** 题目内容 */
    questionText?: string;
    /** 选项JSON */
    options?: string;
    /** 正确答案 */
    correctAnswer?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type quitCourseEnrollmentParams = {
    courseId: number;
  };

  type Role = {
    /** 用户id */
    roleId?: number;
    /** 角色中文名称 */
    cname?: string;
    /** 角色英文名称 */
    ename?: string;
  };

  type RoleQuery = {
    /** 用户id */
    roleId?: number;
    /** 角色中文名称 */
    cname?: string;
    /** 角色英文名称 */
    ename?: string;
  };

  type RoleVO = {
    /** 用户id */
    roleId?: number;
    /** 角色中文名称 */
    cname?: string;
    /** 角色英文名称 */
    ename?: string;
  };

  type scoreSelfTestParams = {
    testId: number;
    studentId: number;
  };

  type SelfTest = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SelfTestCreateParam = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
    /** 题目ID列表，题目顺序为列表顺序 */
    questionIds?: number[];
  };

  type SelfTestQuery = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SelfTestVO = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
    /** 题目列表 */
    questions?: QuestionBank[];
    /** 题目类型 */
    questionTypes?: string[];
    /** 题目数量 */
    questionCount?: number;
    course?: CourseVO;
  };

  type SelfTestWithRecordQuery = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
    /** 学生ID */
    studentId?: number;
    /** 测试记录id */
    recordId?: number;
    /** 测试状态 0 未完成 1 已完成 */
    recordStatus?: "0" | "1";
  };

  type SelfTestWithRecordVO = {
    /** 试卷ID */
    testId?: number;
    /** 创建者ID */
    creatorId?: number;
    /** 试卷所属课程id */
    courseId?: number;
    /** 试卷状态 0-未发布 1-已发布 */
    status?: number;
    /** 试卷标题 */
    title: string;
    /** 试卷说明 */
    description: string;
    /** 试卷设置JSON */
    settings?: string;
    /** 创建时间 */
    createTime?: string;
    /** 题目列表 */
    questions?: QuestionBank[];
    /** 题目类型 */
    questionTypes?: string[];
    /** 题目数量 */
    questionCount?: number;
    course?: CourseVO;
    /** 学生ID */
    studentId?: number;
    student?: UserVO;
    /** 测试记录id */
    recordId?: number;
    /** 测试状态 0 未完成 1 已完成 */
    recordStatus?: "0" | "1";
    record?: TestRecord;
    result?: TestRecordResultVO;
  };

  type setEnableUserRegisterParams = {
    enable: boolean;
  };

  type Sorter = {
    /** 排序字段 */
    column?: string;
    /** 排序方式 asc/desc */
    mode?: string;
    /** 是否自定义字段 */
    customField?: boolean;
  };

  type StudyNote = {
    /** 笔记ID */
    noteId?: number;
    /** 课程ID */
    courseId?: number;
    /** 学生ID */
    studentId?: number;
    /** 标题 */
    title?: string;
    /** 笔记内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type StudyNoteQuery = {
    /** 笔记ID */
    noteId?: number;
    /** 课程ID */
    courseId?: number;
    /** 学生ID */
    studentId?: number;
    /** 标题 */
    title?: string;
    /** 笔记内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type StudyNoteVO = {
    /** 笔记ID */
    noteId?: number;
    /** 课程ID */
    courseId?: number;
    /** 学生ID */
    studentId?: number;
    /** 标题 */
    title?: string;
    /** 笔记内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    course?: CourseVO;
    student?: UserVO;
  };

  type TestRecord = {
    /** 记录ID */
    recordId?: number;
    /** 试卷id */
    testId?: number;
    /** 学生ID */
    studentId?: number;
    /** 测试状态 */
    status?: "0" | "1";
    /** 答案JSON */
    answers?: Answer[];
    /** 得分 */
    score?: number;
    /** 最高分数 */
    maxScore?: number;
    /** 题目分数 questionId:score */
    questionScore?: Record<string, any>;
    /** 正确答案列表 questionId:answer */
    correctAnswers?: Record<string, any>;
    /** 完成时间 */
    completeTime?: string;
    /** 课程标号 */
    courseId?: number;
  };

  type TestRecordCommitParam = {
    /** 记录ID */
    recordId?: number;
    /** 学生ID */
    studentId?: number;
    /** 试卷ID */
    testId?: number;
    /** 答案列表 */
    answers?: Answer[];
    /** 课程编号 */
    courseId?: number;
  };

  type TestRecordQuery = {
    /** 记录ID */
    recordId?: number;
    /** 试卷id */
    testId?: number;
    /** 学生ID */
    studentId?: number;
    /** 测试状态 */
    status?: "0" | "1";
    /** 答案JSON */
    answers?: Answer[];
    /** 得分 */
    score?: number;
    /** 最高分数 */
    maxScore?: number;
    /** 题目分数 questionId:score */
    questionScore?: Record<string, any>;
    /** 正确答案列表 questionId:answer */
    correctAnswers?: Record<string, any>;
    /** 完成时间 */
    completeTime?: string;
    /** 课程标号 */
    courseId?: number;
  };

  type TestRecordResultVO = {
    /** 总分数 */
    totalScore?: number;
    /** 最高分数 */
    maxScore?: number;
    /** 题目分数 questionId:score */
    questionScore?: Record<string, any>;
    /** 正确答案列表 questionId:answer */
    correctAnswers?: Record<string, any>;
  };

  type TestRecordVO = {
    /** 记录ID */
    recordId?: number;
    /** 试卷id */
    testId?: number;
    /** 学生ID */
    studentId?: number;
    /** 测试状态 */
    status?: "0" | "1";
    /** 答案JSON */
    answers?: Answer[];
    /** 得分 */
    score?: number;
    /** 最高分数 */
    maxScore?: number;
    /** 题目分数 questionId:score */
    questionScore?: Record<string, any>;
    /** 正确答案列表 questionId:answer */
    correctAnswers?: Record<string, any>;
    /** 完成时间 */
    completeTime?: string;
    /** 课程标号 */
    courseId?: number;
    /** 试卷标题 */
    title?: string;
    course?: CourseVO;
  };

  type updateAssignmentParams = {
    id: number;
  };

  type updateCourseCarouselParams = {
    id: number;
  };

  type updateCourseCategoryParams = {
    id: number;
  };

  type updateCourseMaterialParams = {
    id: number;
  };

  type updateCourseParams = {
    id: number;
  };

  type updateDiscussionParams = {
    id: number;
  };

  type updateQuestionBankParams = {
    id: number;
  };

  type updateRoleParams = {
    id: number;
  };

  type updateSelfTestParams = {
    id: number;
  };

  type updateStudyNoteParams = {
    id: number;
  };

  type updateTestRecordParams = {
    id: number;
  };

  type updateUserParams = {
    id: number;
  };

  type UserAuthVO = {
    /** 用户ID */
    token?: string;
  };

  type UserForm = {
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 邮箱 */
    email?: string;
    /** 学号 */
    studentId?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatarUrl?: string;
    /** 个性签名 */
    signature?: string;
    /** 性别 */
    gender?: "0" | "1" | "2";
    password?: string;
    /** 学院/部门 */
    department?: string;
    /** 管理员有效！！！用户角色id */
    roleIds?: number[];
  };

  type UserLoginPasswordParam = {
    /** 学号/教职工号 */
    studentId: string;
    /** 密码 */
    password: string;
  };

  type UserPasswordParam = {
    /** 用户ID */
    userId: number;
    /** 旧密码 */
    oldPassword: string;
    /** 新密码 */
    newPassword: string;
  };

  type UserQuery = {
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 密码盐值 */
    salt?: string;
    /** 邮箱 */
    email?: string;
    /** 学号 */
    studentId?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatarUrl?: string;
    /** 性别 0 未知 1 男  2 女 */
    gender?: "0" | "1" | "2";
    /** 个性签名 */
    signature?: string;
    /** 账号状态：0-启用、1-禁用 */
    status?: "0" | "1";
    /** 登录尝试次数 */
    loginAttempts?: number;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后登录IP */
    lastLoginIp?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 学院/部门 */
    department?: string;
    roleIds?: number[];
  };

  type UserResetPasswordParam = {
    /** 用户ID */
    userId: number;
    /** 新密码 */
    newPassword: string;
  };

  type UserStudentRegisterParam = {
    /** 学号 */
    studentId: string;
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  };

  type UserTeacherRegisterParam = {
    /** 教职工号 */
    studentId: string;
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  };

  type UserVO = {
    /** 用户ID */
    userId?: number;
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 密码盐值 */
    salt?: string;
    /** 邮箱 */
    email?: string;
    /** 学号 */
    studentId?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatarUrl?: string;
    /** 性别 0 未知 1 男  2 女 */
    gender?: "0" | "1" | "2";
    /** 个性签名 */
    signature?: string;
    /** 账号状态：0-启用、1-禁用 */
    status?: "0" | "1";
    /** 登录尝试次数 */
    loginAttempts?: number;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后登录IP */
    lastLoginIp?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 学院/部门 */
    department?: string;
    roles?: Role[];
  };

  type viewFileParams = {
    filename: string;
  };

  type viewImageParams = {
    filename: string;
  };
}
