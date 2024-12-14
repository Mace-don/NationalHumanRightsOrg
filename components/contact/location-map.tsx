export function LocationMap() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Our Location</h2>
      <div className="aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3492.8137379951727!2d78.48958577551078!3d28.903882575517688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU0JzE0LjAiTiA3OMKwMjknMzEuOCJF!5e0!3m2!1sen!2sin!4v1734163927729!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>
    </div>
  );
}