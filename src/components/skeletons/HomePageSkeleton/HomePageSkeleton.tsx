import Skeleton from "react-loading-skeleton";
import "./styles.scss";

export const HomePageSkeleton = () => {
  return (
    <div className={`mainMovie container`}>
      <div className="imageContainer">
        <Skeleton borderRadius={50} height={"100%"}/>
      </div>
      <div>
        <div className={`infoContainer`}>
          <div>
            <Skeleton width={100} height={28} borderRadius={50} />
            <Skeleton width={251} height={26} />
          </div>
          <div>
            <Skeleton width={46} height={22} />
            <Skeleton width={84} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
