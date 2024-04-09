export default function loadBalancer(chinaDownload, USDownload) {
  const firstPromiseToSettle = Promise.race([chinaDownload, USDownload]);

  return firstPromiseToSettle;
}
