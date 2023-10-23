const Benef = ({ img, p, titulo }) => {
  return (
    <>
      <div class=" rounded-lg bg-white dark:bg-neutral-700 w-9/12 p-3 m-auto">
        <div class="bg-cover bg-no-repeat flex justify-center p-3">
          <img class="rounded-t-lg" width={50} src={img} alt="" />
        </div>
        <div class="p-2">
          <h2 className=" text-3xl font-normal uppercase">{titulo}</h2>
          <p class="text-base text-neutral-600 dark:text-neutral-200">{p}</p>
        </div>
      </div>
    </>
  );
};

export default Benef;
