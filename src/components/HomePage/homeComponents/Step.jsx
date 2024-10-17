
import Tag from './Tag'

function Step({item, imgSrc}) {
  return (
    <div className={`flex items-center justify-between mt-20 ${item.reversed ? 'flex-row-reverse' : ''}`}>
        <div className='w-[536px]' data-aos="fade-up" data-aos-delay="100">
            <div className='mb-4'>
            <Tag text={item.tag} />
            </div>
            <h3 className='text-[40px] font-bold text-headingColor leading-[132%]'>{item.title}</h3>
            <p className='text-base text-paraDeep'>{item.description}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
            <img className={`${item.id === 1 ? 'h-[563px] w-[657px]' : 'h-[614px] w-[760px]'}`} src={imgSrc} alt="img" />
        </div>
    </div>
  )
}

export default Step