import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OpenWorkStore } from '../ContextStore/OpenWorkStore';
import { IoMdClose } from 'react-icons/io';

function OpenWork() {
  const { webName } = useContext(OpenWorkStore);
  const navigate = useNavigate();

  const projects = {
    portfolio : {
      image : '/images/portfolio.webp',
      url: 'https://salmanhanif-portfolio.vercel.app/'
    },
    todoapp : {
      image : '/images/TodoApp.webp',
      url: 'https://todo-application-mr4y.vercel.app/'
    },
    ahsan: {
      image: '/images/ahsan.webp',
      url: 'https://react-ahsan-medical-complex.vercel.app/'
    },
    ecommerce: {
      image: '/images/ecommerce.webp',
      url: 'https://ecommerce-website-developershub.vercel.app/'
    },
    smashers: {
      image: '/images/smashers.webp',
      url: 'https://example.com/smashers'
    },
    newshub: {
      image: '/images/news.webp',
      url: 'https://news-application-two-virid.vercel.app/'
    }
  };

  const projectKey = webName?.toLowerCase?.();
  const project = projects[projectKey] || projects['portfolio'];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0c0c0c] z-50 flex items-center justify-center px-4 py-6">
      <div className="relative w-full max-w-3xl md:max-w-4xl bg-[#111] rounded-2xl shadow-[0px_0px_25px_green] p-4 md:p-8 transform scale-95 hover:scale-100 duration-300 ease-in-out">
        <button
          className="absolute cursor-pointer top-4 right-4 text-white text-3xl hover:text-green-500 transition"
          onClick={() => navigate('/')}
        >
          <IoMdClose />
        </button>
        <div className="flex justify-center">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={projectKey}
              className="rounded-2xl text-white max-h-[80vh] object-contain shadow-[0px_0px_25px_green] transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default OpenWork;
