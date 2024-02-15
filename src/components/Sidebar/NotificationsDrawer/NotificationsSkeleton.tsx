import { SkeletonShimmer } from "@/utils/animations";

const CardSkeleton = () => (
  <div className="flex items-center py-2 px-6">
    <div className="h-11 w-11 min-h-11 min-w-11 rounded-full bg-background-hover mr-3" />
    <div className="h-[14px] w-full rounded-[4px] bg-background-hover" />
    <div className="h-11 w-11 min-h-11 min-w-11 rounded-[4px] bg-background-hover ml-[22px]" />
  </div>
);

const NotificationsSkeleton = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="h-4 w-[100px] rounded-[4px] bg-background-hover ml-6 mb-4" />

      {Array(16)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}

      <SkeletonShimmer />
      <SkeletonShimmer delay={2} />
      <SkeletonShimmer delay={4} />
    </div>
  );
};

export default NotificationsSkeleton;
