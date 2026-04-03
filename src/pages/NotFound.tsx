import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary-purple to-primary-teal">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-10">
            <div className="text-6xl mb-4" aria-hidden="true">🤖</div>
            <h1 className="text-3xl font-outfit font-bold text-neutral-dark mb-3">
              Seite nicht gefunden
            </h1>
            <p className="text-neutral-gray mb-8">
              Diese Seite gibt es nicht oder sie wurde verschoben.
            </p>
            <Link to="/" className="btn-primary inline-flex">
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
