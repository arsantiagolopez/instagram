type SkeletonShimmerProps = {
  delay?: number;
};

export const SkeletonShimmer = ({ delay }: SkeletonShimmerProps) => {
  const style = delay
    ? {
        animationDelay: `${delay}s`,
      }
    : {};

  return (
    <div
      style={style}
      className="absolute w-full h-2/3 bg-gradient-10 from-transparent via-background to-transparent opacity-75 -translate-y-full animate-skeleton-shimmer"
    />
  );
};
