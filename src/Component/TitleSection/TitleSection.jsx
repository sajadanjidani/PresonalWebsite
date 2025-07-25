const TitleSection = ({Title , bgColor}) => {
  return (
    <div class="flex justify-center items-center w-[94%] h-16 mx-auto text-center rounded-lg mt-8" style={{backgroundColor : bgColor}}>
      <h1 class="text-customeWhite text-3xl font-danaDemibold mb-3">
        <span class="text-themColor">{Title}</span> من
      </h1>
    </div>
  );
};

export default TitleSection;
