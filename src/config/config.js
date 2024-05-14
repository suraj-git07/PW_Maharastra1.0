const config = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteBatchesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_BATCHES_COLLECTION_ID),
    appwriteCoursesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COURSES_COLLECTION_ID),
    appwriteBannerBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BANNER_BUCKET_ID),
    appwriteCourseBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_COURSE_BUCKET_ID),
    appwriteCourseQueryId: String(process.env.NEXT_PUBLIC_APPWRITE_COURSE_QUERY_COLLECTION_ID),
}

export default config